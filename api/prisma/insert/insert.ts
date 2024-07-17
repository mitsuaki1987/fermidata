import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const insert = async () => {
    // Assuming you have already set up Prisma and imported the necessary modules
    const fs = require('fs');

    // Read the JSON data from "data.json" file
    const jsonData = JSON.parse(fs.readFileSync('data_insert.json', 'utf8'));
    // console.log(jsonData); // Display the created material objects (you can remove this line)

    // Create an array of material objects based on the parsed data
    const dataList = Object.entries(jsonData).map(([materialCode, materialData]) => {
        const { eform, magt, dosf, type } = materialData as {
            eform: number;
            magt: number;
            dosf: number;
            type: {
            [elementSymbolName: string]: {
                nat: number;
                pdos?: number[];
            };
            };
        }

        return {
            material_page_url: '#',
            material_code: materialCode,
            eform_value: eform,
            magt_value: magt,
            dosf_value: dosf,
            material_composition: materialCode, // Assuming material composition is the same as material code

            types: {
                create: Object.entries(type).map(([elementSymbolName, elementData]) => ({
                    element_symbol_name: elementSymbolName,
                    nat_value: (elementData as { nat: number }).nat,
                    element_data: elementData,
                    // Add other properties for Type model if needed
                    // ...
                }))
            }
        };
    });

    console.log(dataList); // Display the created material objects (you can remove this line)


    for(let data of dataList) {
        await prisma.material.create({
            data,
            include: {
                types: true, // Include all posts in the returned object
            },
        });
    }
}
