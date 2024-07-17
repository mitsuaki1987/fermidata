/*
  Warnings:

  - You are about to alter the column `eform_value` on the `materials` table. The data in that column could be lost. The data in that column will be cast from `Decimal(30,20)` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `materials` MODIFY `eform_value` DECIMAL(65, 30) NOT NULL;
