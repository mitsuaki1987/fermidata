/*
  Warnings:

  - You are about to alter the column `eform_value` on the `materials` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(60,30)`.
  - You are about to alter the column `magt_value` on the `materials` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(60,30)`.
  - You are about to alter the column `dosf_value` on the `materials` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(60,30)`.

*/
-- AlterTable
ALTER TABLE `materials` MODIFY `eform_value` DECIMAL(60, 30) NOT NULL,
    MODIFY `magt_value` DECIMAL(60, 30) NOT NULL,
    MODIFY `dosf_value` DECIMAL(60, 30) NOT NULL;
