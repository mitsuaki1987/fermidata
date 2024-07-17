import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const element = async () => {
    await prisma.elementSymbol.createMany({
        data: [
            {
                atomic_number: 1,
                element_symbol: 'H',
            },
            {
                atomic_number: 2,
                element_symbol: 'He',
            },
            {
                atomic_number: 3,
                element_symbol: 'Li',
            },
            {
                atomic_number: 4,
                element_symbol: 'Be',
            },
            {
                atomic_number: 5,
                element_symbol: 'B',
            },
            {
                atomic_number: 6,
                element_symbol: 'C',
            },
            {
                atomic_number: 7,
                element_symbol: 'N',
            },
            {
                atomic_number: 8,
                element_symbol: 'O',
            },
            {
                atomic_number: 9,
                element_symbol: 'F',
            },
            {
                atomic_number: 10,
                element_symbol: 'Ne',
            },
            {
                atomic_number: 11,
                element_symbol: 'Na',
            },
            {
                atomic_number: 12,
                element_symbol: 'Mg',
            },
            {
                atomic_number: 13,
                element_symbol: 'Al',
            },
            {
                atomic_number: 14,
                element_symbol: 'Si',
            },
            {
                atomic_number: 15,
                element_symbol: 'P',
            },
            {
                atomic_number: 16,
                element_symbol: 'S',
            },
            {
                atomic_number: 17,
                element_symbol: 'Cl',
            },
            {
                atomic_number: 18,
                element_symbol: 'Ar',
            },
            {
                atomic_number: 19,
                element_symbol: 'K',
            },
            {
                atomic_number: 20,
                element_symbol: 'Ca',
            },
            {
                atomic_number: 21,
                element_symbol: 'Sc',
            },
            {
                atomic_number: 22,
                element_symbol: 'Ti',
            },
            {
                atomic_number: 23,
                element_symbol: 'V',
            },
            {
                atomic_number: 24,
                element_symbol: 'Cr',
            },
            {
                atomic_number: 25,
                element_symbol: 'Mn',
            },
            {
                atomic_number: 26,
                element_symbol: 'Fe',
            },
            {
                atomic_number: 27,
                element_symbol: 'Co',
            },
            {
                atomic_number: 28,
                element_symbol: 'Ni',
            },
            {
                atomic_number: 29,
                element_symbol: 'Cu',
            },
            {
                atomic_number: 30,
                element_symbol: 'Zn',
            },
            {
                atomic_number: 31,
                element_symbol: 'Ga',
            },
            {
                atomic_number: 32,
                element_symbol: 'Ge',
            },
            {
                atomic_number: 33,
                element_symbol: 'As',
            },
            {
                atomic_number: 34,
                element_symbol: 'Se',
            },
            {
                atomic_number: 35,
                element_symbol: 'Br',
            },
            {
                atomic_number: 36,
                element_symbol: 'Kr',
            },
            {
                atomic_number: 37,
                element_symbol: 'Rb',
            },
            {
                atomic_number: 38,
                element_symbol: 'Sr',
            },
            {
                atomic_number: 39,
                element_symbol: 'Y',
            },
            {
                atomic_number: 40,
                element_symbol: 'Zr',
            },
            {
                atomic_number: 41,
                element_symbol: 'Nb',
            },
            {
                atomic_number: 42,
                element_symbol: 'Mo',
            },
            {
                atomic_number: 43,
                element_symbol: 'Tc',
            },
            {
                atomic_number: 44,
                element_symbol: 'Ru',
            },
            {
                atomic_number: 45,
                element_symbol: 'Rh',
            },
            {
                atomic_number: 46,
                element_symbol: 'Pd',
            },
            {
                atomic_number: 47,
                element_symbol: 'Ag',
            },
            {
                atomic_number: 48,
                element_symbol: 'Cd',
            },
            {
                atomic_number: 49,
                element_symbol: 'In',
            },
            {
                atomic_number: 50,
                element_symbol: 'Sn',
            },
            {
                atomic_number: 51,
                element_symbol: 'Sb',
            },
            {
                atomic_number: 52,
                element_symbol: 'Te',
            },
            {
                atomic_number: 53,
                element_symbol: 'I',
            },
            {
                atomic_number: 54,
                element_symbol: 'Xe',
            },
            {
                atomic_number: 55,
                element_symbol: 'Cs',
            },
            {
                atomic_number: 56,
                element_symbol: 'Ba',
            },
            {
                atomic_number: 57,
                element_symbol: 'La',
            },
            {
                atomic_number: 58,
                element_symbol: 'Ce',
            },
            {
                atomic_number: 59,
                element_symbol: 'Pr',
            },
            {
                atomic_number: 60,
                element_symbol: 'Nd',
            },
            {
                atomic_number: 61,
                element_symbol: 'Pm',
            },
            {
                atomic_number: 62,
                element_symbol: 'Sm',
            },
            {
                atomic_number: 63,
                element_symbol: 'Eu',
            },
            {
                atomic_number: 64,
                element_symbol: 'Gd',
            },
            {
                atomic_number: 65,
                element_symbol: 'Tb',
            },
            {
                atomic_number: 66,
                element_symbol: 'Dy',
            },
            {
                atomic_number: 67,
                element_symbol: 'Ho',
            },
            {
                atomic_number: 68,
                element_symbol: 'Er',
            },
            {
                atomic_number: 69,
                element_symbol: 'Tm',
            },
            {
                atomic_number: 70,
                element_symbol: 'Yb',
            },
            {
                atomic_number: 71,
                element_symbol: 'Lu',
            },
            {
                atomic_number: 72,
                element_symbol: 'Hf',
            },
            {
                atomic_number: 73,
                element_symbol: 'Ta',
            },
            {
                atomic_number: 74,
                element_symbol: 'W',
            },
            {
                atomic_number: 75,
                element_symbol: 'Re',
            },
            {
                atomic_number: 76,
                element_symbol: 'Os',
            },
            {
                atomic_number: 77,
                element_symbol: 'Ir',
            },
            {
                atomic_number: 78,
                element_symbol: 'Pt',
            },
            {
                atomic_number: 79,
                element_symbol: 'Au',
            },
            {
                atomic_number: 80,
                element_symbol: 'Hg',
            },
            {
                atomic_number: 81,
                element_symbol: 'Tl',
            },
            {
                atomic_number: 82,
                element_symbol: 'Pb',
            },
            {
                atomic_number: 83,
                element_symbol: 'Bi',
            },
            {
                atomic_number: 84,
                element_symbol: 'Po',
            },
            {
                atomic_number: 85,
                element_symbol: 'At',
            },
            {
                atomic_number: 86,
                element_symbol: 'Rn',
            },
            {
                atomic_number: 87,
                element_symbol: 'Fr',
            },
            {
                atomic_number: 88,
                element_symbol: 'Ra',
            },
            {
                atomic_number: 89,
                element_symbol: 'Ac',
            },
            {
                atomic_number: 90,
                element_symbol: 'Th',
            },
            {
                atomic_number: 91,
                element_symbol: 'Pa',
            },
            {
                atomic_number: 92,
                element_symbol: 'U',
            },
            {
                atomic_number: 93,
                element_symbol: 'Np',
            },
            {
                atomic_number: 94,
                element_symbol: 'Pu',
            },
            {
                atomic_number: 95,
                element_symbol: 'Am',
            },
            {
                atomic_number: 96,
                element_symbol: 'Cm',
            },
            {
                atomic_number: 97,
                element_symbol: 'Bk',
            },
            {
                atomic_number: 98,
                element_symbol: 'Cf',
            },
            {
                atomic_number: 99,
                element_symbol: 'Es',
            },
            {
                atomic_number: 100,
                element_symbol: 'Fm',
            },
            {
                atomic_number: 101,
                element_symbol: 'Md',
            },
            {
                atomic_number: 102,
                element_symbol: 'No',
            },
            {
                atomic_number: 103,
                element_symbol: 'Lr',
            },
            {
                atomic_number: 104,
                element_symbol: 'Rf',
            },
            {
                atomic_number: 104,
                element_symbol: 'Rf',
            },
            {
                atomic_number: 105,
                element_symbol: 'Db',
            },
            {
                atomic_number: 106,
                element_symbol: 'Sg',
            },
            {
                atomic_number: 107,
                element_symbol: 'Bh',
            },
            {
                atomic_number: 108,
                element_symbol: 'Hs',
            },
            {
                atomic_number: 109,
                element_symbol: 'Mt',
            },
            {
                atomic_number: 110,
                element_symbol: 'Ds',
            },
            {
                atomic_number: 111,
                element_symbol: 'Rg',
            },
            {
                atomic_number: 112,
                element_symbol: 'Cn',
            },
            {
                atomic_number: 113,
                element_symbol: 'Nh',
            },
            {
                atomic_number: 114,
                element_symbol: 'Fl',
            },
            {
                atomic_number: 115,
                element_symbol: 'Mc',
            },
            {
                atomic_number: 116,
                element_symbol: 'Lv',
            },
            {
                atomic_number: 117,
                element_symbol: 'Ts',
            },
            {
                atomic_number: 118,
                element_symbol: 'Og',
            },
        ],
        skipDuplicates: true,
    });
}
