/*
  Warnings:

  - You are about to drop the column `element_symbol` on the `types` table. All the data in the column will be lost.
  - Added the required column `element_symbol_name` to the `types` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `types` DROP COLUMN `element_symbol`,
    ADD COLUMN `element_symbol_name` VARCHAR(128) NOT NULL;
