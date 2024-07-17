import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { insert } from './insert';

async function main() {
    await insert();
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
