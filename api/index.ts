import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import type { Prisma } from '@prisma/client';

const cors = require('cors');

const app = express();
const port = 3000;

// CORSでhttp://localhost:8080からのリクエストを許可
app.use(cors({
    origin: 'http://163.220.177.102:8080',
    credentials: true
}));

const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.get('/materials', async (req: Request, res: Response) => {
    var minE = req.query.minE;

    // where 句の作成：入力値がない場合にエラーにならないように対応
    var whereQuery: Prisma.MaterialWhereInput = {};

    if (req.query.keyword) {
        var keyword = req.query.keyword.toString();
        // 「%」記号混入時の対処(MySQLデフォルトでワイルドカードとなるため削除する)
        if (keyword.includes("%")) {
            keyword = keyword.replace(/\%/g, '');
        }

        // 検索記号を用いない場合：組成式の倍数検索が可能
        // 組成式の倍数検索処理（例：O2Ru1 → O2Ru1/O4Ru2/O6Ru3）
        if ((!keyword.includes("*")) && (!keyword.includes("#")) && (!keyword.includes("?"))) {
            console.log("test 組成式検索");

            // ループ処理のために最大値を取得
            const maxNatValue = await prisma.type.findFirst({
                // const maxNatValue = prisma.type.findFirst({
                select: {
                    nat_value: true
                },
                orderBy: {
                    nat_value: 'desc'
                }
            }) || { nat_value: 0 };
            console.log(`The maximum value of 'nat_value' is: ${maxNatValue?.nat_value}`);

            const elementArrays: { element: string; count: number }[][] = generateElementArrays(maxNatValue.nat_value, keyword);
            // console.log('elementArrays:' + JSON.stringify(elementArrays));

            // バグ修正：配列構造の入れ子が一段階不足している件に対応
            const elementsArray: string[] = convertObjectToArray(elementArrays);
            // console.log('elementsArray:' + JSON.stringify(elementsArray));

            // Prisma クエリの作成
            whereQuery = {
                OR: elementsArray.map((composition) => ({
                    material_code: {
                        contains: composition,
                    },
                })),
            }

            whereQuery.types = {
                every: {
                    OR: elementArrays.map((elements) => ({
                        OR: elements.map(({ element, count }) => ({
                            AND: {
                                element_symbol_name: element,
                                nat_value: Number(count),
                            }
                        })),
                    })),
                }
            };
            // console.log('whereQuery.types!!:' + JSON.stringify(whereQuery));

            // 元素数は全てワイルドカードとする
            // keyword = keyword.replace(/\d/g, '%');
        }

        // 検索キーワードのパース処理(#記号)
        if (keyword.includes("#")) {
            const elements = Object.entries(parseChemicalFormula(keyword));
            // const elements = Object.entries({ 'O': '#', 'Ru': 2 });
            // console.log('elements!!:' + elements);
            whereQuery.types = {
                every: {
                    OR: elements.map(([element, nat_value]) => ({
                        element_symbol_name: element,
                        nat_value: nat_value as any === "#" ? { gt: 0 } : nat_value as any,
                    })),
                },
            }
            // console.log('whereQuery.types!!:' + whereQuery.types);
            keyword = keyword.replace(/#/g, '%');
            whereQuery.material_code = { contains: keyword };
        }

        // 検索キーワードのパース処理(?記号)
        // 「?」記号利用時は分割した「元素記号：元素数」の組み合わせ順序は問わない（「Na1?1」も「?1Na1」も同一検索結果を返す）
        if (keyword.includes("?")) {
            const elements = parseChemicalFormulaToArr(keyword);
            // console.log('elements!!:' + JSON.stringify(elements));
            whereQuery.types = {
                some: {
                    OR: elements.map(({ element, count }) => ({
                        element_symbol_name: element.replace(/\?/g, '%'),
                        nat_value: count as any,
                    })),
                },
            }

            keyword = keyword.replace(/\?/g, '%');
            whereQuery.material_code = { contains: keyword };
        }

        // 通常のワイルドカード検索時
        if (keyword.includes("*")) {
            keyword = keyword.replace(/\*/g, '%');
            // console.log('keyword!!:' + keyword);
            whereQuery.material_code = { contains: keyword };
        }
    }

    if (req.query.minE || req.query.maxE) {
        whereQuery.eform_value = {};
        if (req.query.minE) {
            whereQuery.eform_value.gte = +req.query.minE;
        }
        if (req.query.maxE) {
            whereQuery.eform_value.lte = +req.query.maxE;
        }
    }
    if (req.query.minM || req.query.maxM) {
        whereQuery.magt_value = {};
        if (req.query.minM) {
            whereQuery.magt_value.gte = +req.query.minM;
        }
        if (req.query.maxM) {
            whereQuery.magt_value.lte = +req.query.maxM;
        }
    }
    if (req.query.minD || req.query.maxD) {
        whereQuery.dosf_value = {};
        if (req.query.minD) {
            whereQuery.dosf_value.gte = +req.query.minD;
        }
        if (req.query.maxD) {
            whereQuery.dosf_value.lte = +req.query.maxD;
        }
    }

    console.log('whereQuery:' + JSON.stringify(whereQuery));
    var materials = await prisma.material.findMany(
        {
            where: whereQuery,
            include: {
                types: {
                    select: {
                        element_symbol_name: true,
                        nat_value: true
                    }
                }
            },
        }
    );

    // console.log('materials:' + JSON.stringify(materials));
    res.send(materials);
});

app.post('/materials', async (req: Request, res: Response) => {
    // res.send('Hello World!!!!!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// 検索キーワードのパース処理(#記号)
// 与えられた組成式をパースして元素記号と元素数に分解し、オブジェクトとして返す関数
function parseChemicalFormula(formula: string): Record<string, number | string> {
    const elements: Record<string, number | string> = {}; // 元素記号と元素数を格納するオブジェクト

    // 正規表現パターンを定義
    const pattern = /([A-Z][a-z]*)(\d*|\#\d*)/g;

    // 正規表現パターンにマッチするトークンを取得
    const tokens = formula.match(pattern) || [];
    console.log('(tokens):' + tokens);

    // トークンごとに処理
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const [element, count] = token.split(/(\d\#*)/); // 元素記号と元素数を分割
        // console.log('(element):' + element);
        // console.log('(count):' + count);

        // 元素数が存在する場合はパースしてオブジェクトに追加
        if (count) {
            elements[element] = count === "#" ? "#" : parseInt(count, 10);
        } else {
            // 元素数が指定されていない場合は#としてオブジェクトに追加
            elements[element] = "#";
        }
    }

    // console.log('(elements):' + JSON.stringify(elements));
    return elements; // オブジェクトを返す
}

// 検索キーワードのパース処理(?記号)
// 与えられた組成式をパースして元素記号と元素数に分解し、配列として返す関数
function parseChemicalFormulaToArr(formula: any) {
    const elements = []; // 元素記号と元素数を格納する配列

    // 正規表現パターンを定義
    const pattern = /([A-Z][a-z]*|\?\d*)(\d*)/g;

    // 正規表現パターンにマッチするトークンを取得
    const tokens = formula.match(pattern) || [];

    // トークンごとに処理
    for (const token of tokens) {
        const [element, count] = token.split(/(\d\#*)/); // 元素記号と元素数を分割

        // 元素数が存在する場合はパースして配列に追加
        if (count) {
            // 元素名と元素数の組み合わせになっているかチェック
            if (/^[A-Z][a-z]*|\?\d*$/.test(element) && /^(\d*)$/.test(count)) {
                elements.push({ element, count: count === "#" ? "#" : parseInt(count, 10) });
            }
        } else {
            // 元素数が指定されていない場合は0として配列に追加
            elements.push({ element, count: 0 });
        }
    }

    return elements; // 配列を返す
}

function generateElementArrays(maxValue: number, compositionString: string) {
    const pattern = /([A-Z][a-z]*)(\d*)/g;
    const tokens = compositionString.match(pattern) || [];

    const composition: { element: string; count: number }[] = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const [element, count] = token.split(/(\d\#*)/);
        composition.push({ element, count: parseInt(count) });
    }

    const combinations: { element: string; count: number }[][] = [];
    for (let i = 1; i <= maxValue; i++) {
        const combination: { element: string; count: number }[] = [];
        for (const { element, count } of composition) {
            combination.push({ element, count: count * i });
        }
        combinations.push(combination);
    }

    return combinations;
}

function convertObjectToArray(objList: { element: string; count: number }[][]): string[] {
    const result:any = [];
    objList.forEach(list => {
        const counts = list.map(entry => entry.count);
        const obj = list.map((entry, index) => `${entry.element}${counts[index]}`);
        const elm = obj.join("");
        console.log('(elm):' + elm);
        result.push(elm);
    });
    // console.log('(result):' + result);
    return result;
}
