/*
  Warnings:

  - Added the required column `material_page_url` to the `materials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `materials` ADD COLUMN `material_page_url` TEXT NOT NULL;
