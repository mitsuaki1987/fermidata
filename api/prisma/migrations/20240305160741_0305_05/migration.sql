/*
  Warnings:

  - The primary key for the `element_symbol` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `element_symbol_id` on the `element_symbol` table. All the data in the column will be lost.
  - You are about to drop the column `element_symbol_id` on the `types` table. All the data in the column will be lost.
  - Added the required column `element_symbol` to the `types` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `types` DROP FOREIGN KEY `types_element_symbol_id_fkey`;

-- AlterTable
ALTER TABLE `element_symbol` DROP PRIMARY KEY,
    DROP COLUMN `element_symbol_id`,
    ADD PRIMARY KEY (`atomic_number`);

-- AlterTable
ALTER TABLE `types` DROP COLUMN `element_symbol_id`,
    ADD COLUMN `element_symbol` VARCHAR(128) NOT NULL;
