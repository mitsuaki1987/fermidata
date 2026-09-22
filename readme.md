# fermidata 実行環境マニュアル（ネイティブ構成）

## 概要

Docker を使わず、サーバー上のネイティブな Node.js / MySQL / Apache で動作します。

```
  ブラウザ
    │ https://ip-163-220-177-91.compute.mdx1.jp/fermidata/search/
    ▼
  Apache 2.4 (:443, Let's Encrypt)
    ├─ /fermidata/search/      → /var/www/html/fermidata/search/  (Vue のビルド成果物)
    ├─ /fermidata/search/api/  → ProxyPass 127.0.0.1:3000         (Express + Prisma)
    └─ /fermidata/html/        → /var/www/html/fermidata/html/    (物質ごとの静的ページ)
                                        │
                        systemd: fermidata-api.service
                                        │
                        systemd: mysql.service (127.0.0.1:3306)
```

- 検索から結果表示、個別物質のデータ表示までが `/fermidata/` 配下で完結します
- フロントエンドは静的ファイルなので常駐プロセスは API の1本だけです
- API と MySQL はループバック (127.0.0.1) のみで待ち受け、外部には公開されません

| 構成要素 | 実体 |
|---|---|
| Node.js | v22 LTS（NodeSource の apt リポジトリ） |
| MySQL | 8.0（Ubuntu 標準の `mysql-server`、`systemd: mysql`） |
| API | `api/dist/index.js`（`systemd: fermidata-api`） |
| フロントエンド | `/var/www/html/fermidata/search/`（`app/dist` を rsync） |
| 設定ファイルの原本 | `deploy/` ディレクトリ（下記参照） |

`deploy/` 以下の3ファイルが実際の設置先の原本です。編集したら設置先へコピーしてください。

| リポジトリ | 設置先 | 反映コマンド |
|---|---|---|
| `deploy/fermidb.cnf` | `/etc/mysql/conf.d/fermidb.cnf` | `sudo systemctl restart mysql` |
| `deploy/fermidata-api.service` | `/etc/systemd/system/fermidata-api.service` | `sudo systemctl daemon-reload && sudo systemctl restart fermidata-api` |
| `deploy/fermidata-search.conf` | `/etc/apache2/conf-available/fermidata-search.conf` | `sudo systemctl reload apache2` |
| `deploy/fermidata-private.conf` | `/etc/apache2/conf-available/fermidata-private.conf` | `sudo systemctl reload apache2` |

---

# 日常の操作

## フロントエンド（app）を更新する

```
cd ./app
npm run build      # app/dist を生成
npm run deploy     # /var/www/html/fermidata/search/ へ rsync (--delete)
```

## バックエンド（api）を更新する

```
cd ./api
npm run build                          # TypeScript を api/dist へコンパイル
sudo systemctl restart fermidata-api
```

## 状態確認・ログ

```
systemctl status fermidata-api mysql apache2
sudo journalctl -u fermidata-api -f        # API のログ（1リクエスト1行）
sudo tail -f /var/log/mysql/error.log      # MySQL エラーログ
sudo tail -f /var/log/mysql/mysql-slow.log # スロークエリ（5秒超）
sudo tail -f /var/log/apache2/access.log   # Apache アクセスログ
```

いずれのサービスも `systemctl enable` 済みなので、OS 再起動後は自動で復帰します。
API は異常終了しても systemd が5秒後に再起動します。

API のログは1リクエスト1行です。

```
GET /materials keyword=O2Ru1 minE=-1 -> 3 hits (28ms)
GET /materials failed: PrismaClientValidationError: Argument `nat_value` is missing.
```

検索条件の組み立て（`whereQuery`）やスタックトレースまで追いたい場合は `api/.env` に
`API_LOG_LEVEL="debug"` を追記して `sudo systemctl restart fermidata-api` してください。

## ローカル開発（ホットリロード）

本番の静的配信とは別に、開発用サーバーを使えます。

```
cd ./api && npm run dev     # nodemon + ts-node (127.0.0.1:3000)
cd ./app && npm run serve   # http://<host>:8080/fermidata/search/
```

`app` の開発サーバーは `/fermidata/search/api` を `127.0.0.1:3000` へプロキシするので、
本番と同じ同一オリジン構成でそのまま動作します（CORS 設定は不要です）。

---

# セットアップ（新しいサーバーに構築する場合）

## 1. Node.js 22 LTS

```
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## 2. MySQL

```
sudo apt-get install -y mysql-server
sudo cp deploy/fermidb.cnf /etc/mysql/conf.d/fermidb.cnf
sudo systemctl restart mysql
```

DB とアプリ用ユーザーを作成します（パスワードは適宜生成してください）。

```
sudo mysql -e "
CREATE DATABASE IF NOT EXISTS materials_db CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
CREATE USER 'fermidata'@'localhost' IDENTIFIED BY '<パスワード>';
GRANT ALL PRIVILEGES ON materials_db.* TO 'fermidata'@'localhost';"
```

> `deploy/fermidb.cnf` に `lower_case_table_names` は入れていません。MySQL 8 ではこの値を
> データディレクトリ初期化後に変更するとサーバーが起動しなくなります。Prisma のテーブル名は
> すべて小文字（`materials` / `types` / `element_symbol`）なので設定は不要です。

## 3. API

```
cp api/.env.example api/.env
# DATABASE_URL のパスワードを上で設定した値に書き換える
chmod 600 api/.env

cd ./api
npm install
npx prisma generate
npx prisma migrate deploy      # 本番では dev ではなく deploy を使う
npm run build

sudo cp ../deploy/fermidata-api.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now fermidata-api
```

## 4. フロントエンド

```
cd ./app
npm install
npm run build
mkdir -p /var/www/html/fermidata/search
npm run deploy
```

## 5. Apache

```
sudo cp deploy/fermidata-search.conf /etc/apache2/conf-available/
sudo cp deploy/fermidata-private.conf /etc/apache2/conf-available/
sudo a2enmod proxy proxy_http
sudo a2enconf fermidata-search
sudo a2enconf fermidata-private
sudo apache2ctl configtest && sudo systemctl reload apache2
```

`fermidata-private.conf` は、この作業ツリーが公開ディレクトリ
`/var/www/html/fermidata/` そのものであることへの対策です。`.git/` や `api/` `app/`
`deploy/` `doc/` `readme.md`、ドットで始まるファイルを Apache 側で拒否します。
**ソースやツールのディレクトリを新しく追加したら、このファイルにも追記してください。**

---

# DB操作マニュアル

## 概要

1. マイグレーション … DB 構築と同時にレコードをセットします
2. シーディング … 既存の DB にレコードをセットします（既存のレコードは上書きされます）
3. インサート … 既存の DB にレコードを追加します（既存のレコードは残ります）

いずれも `api` ディレクトリで実行します（Docker への `exec` は不要になりました）。

### 1. マイグレーション

- ファイル名を「data.json」とした追加用JSONデータファイルを用意します
- 用意したJSONデータファイルを api ディレクトリ直下に配置します

```
cd ./api
npx prisma migrate deploy   # 既存のマイグレーションを適用（本番）
npx prisma migrate dev      # スキーマ変更時に新しいマイグレーションを作成（開発）
```

> `npx prisma migrate dev` はシャドーデータベースの作成権限を必要とします。
> 権限が足りない場合は次を実行してください。
> `sudo mysql -e "GRANT CREATE, DROP, ALTER, REFERENCES ON *.* TO 'fermidata'@'localhost';"`

リセット（スキーマ変更時。既存レコードを削除してから追加。ID はリセットされます）:

```
cd ./api
npx prisma migrate reset
```

### 2. シーディング

＊既存のレコードデータを削除した上で、レコードを追加します。（ID はリセットされません）

- ファイル名を「data.json」とした追加用JSONデータファイルを api ディレクトリ直下に配置します

```
cd ./api
npx prisma db seed
```

### 3. インサート

＊既存のレコードデータの後に、レコードを追加します。（ID や主キーが重複するとエラーになります）

- ファイル名を「data_insert.json」とした追加用JSONデータファイルを api ディレクトリ直下に配置します

```
cd ./api
npx ts-node prisma/insert/start.ts
```

### バックアップとリストア

```
mysqldump -u fermidata -p --single-transaction --routines --triggers \
  materials_db > ~/backup/materials_db_$(date +%Y%m%d).sql

mysql -u fermidata -p materials_db < ~/backup/materials_db_YYYYMMDD.sql
```

### appendix

1. JSON データファイルについて

- 基本のファイル名は「data.json」としてください
- インサート用のファイル名は「data_insert.json」としてください

2. Prisma Studio

DB 内のテーブルやレコードを GUI で管理できる付属ツールです。

```
cd ./api
npx prisma studio    # 127.0.0.1:5555
```

ポート 5555 は外部公開していないので、手元の PC から SSH ポートフォワードで接続してください。

```
ssh -L 5555:127.0.0.1:5555 <user>@ip-163-220-177-91.compute.mdx1.jp
```

---

# 旧 Docker 構成について

以前は `docker-compose.yml` で app / api / db の3コンテナを動かしていましたが、
ネイティブ構成への移行完了に伴い、コンテナ・ボリューム (`fermidata_mysqldata`)・
`docker-compose.yml`・`db/`（旧 my.cnf とログ）はすべて削除しました。
MySQL の設定は `deploy/fermidb.cnf` に引き継がれています。

移行前のデータは `~/backup/materials_db_20260922.sql` にダンプとして保管しています。
