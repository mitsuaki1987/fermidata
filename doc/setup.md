# 実行環境セットアップマニュアル

## 概要

- Dockerインストール環境を使用します
- Dockerを用いてアプリケーション実行環境をセットアップします
- セットアップした環境にアプリケーションをデプロイします

### 1. 事前準備

- DB設定値の変更
    - .env ファイルの環境変数を適宜変更してください
    - my.cnf ファイルの設定値を適宜変更してください
- セットアップ用ファイルの配置
    - 下記のセットアップ用のファイル群を同一フォルダ内に配置します
        - .env
        - docker-compose.yml
        - makeEnv.sh
        - my.cnf

### 2. セットアップ実行

1. makeEnv.sh を実行します

```
sh makeEnv.sh
```

2. db_search_ui ディレクトリへ移動します

```
cd db_search_ui
```

3. docker-compose を実行します

```
docker-compose up -d
```

4. 各アプリケーションのソースコードを用意します

- バックエンドAPI
    - Git等のコードベースから「api」フォルダ配下をDocker環境の「api」フォルダ配下に丸ごとコピーします
- フロントエンドアプリケーション
    - Git等のコードベースから「app」フォルダ配下をDocker環境の「app」フォルダ配下に丸ごとコピーします

5. Docker 環境にアクセスします

    5-1. バックエンドAPI(api)にアクセス

    ```
    cd (docker-compose.yml ファイルを配置したディレクトリに移動してください)
    docker-compose exec api bash
    ```

    * ここからはDocker環境内(apiディレクトリ直下)での操作です *

    - npm をインストール(アップデート)します

    ```
    npm install
    npm update
    ```

    - DB マイグレーションを実行します

    ```
    npx prisma migrate dev
    ```

    - api サーバを起動します

    ```
    npm run dev
    ```

    5-2. フロントエンドアプリケーション(app)にアクセス

    ```
    cd (docker-compose.yml ファイルを配置したディレクトリに移動してください)
    docker-compose exec app bash
    ```

    * ここからはDocker環境内(appディレクトリ直下)での操作です *

    - npm をインストールします

    ```
    npm install
    npm update
    ```

    - app サーバを起動します

    ```
    npm run serve
    ```

6. ブラウザからアクセスして起動を確認します
