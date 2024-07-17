import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { element } from './element';
import { material } from './material';

async function main() {
    await prisma.elementSymbol.deleteMany();
    await prisma.material.deleteMany();
    await element();
    await material();
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
