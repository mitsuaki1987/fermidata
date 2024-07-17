/*
  Warnings:

  - You are about to alter the column `eform_value` on the `materials` table. The data in that column could be lost. The data in that column will be cast from `Decimal(60,30)` to `Double`.
  - You are about to alter the column `magt_value` on the `materials` table. The data in that column could be lost. The data in that column will be cast from `Decimal(60,30)` to `Double`.
  - You are about to alter the column `dosf_value` on the `materials` table. The data in that column could be lost. The data in that column will be cast from `Decimal(60,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `materials` MODIFY `eform_value` DOUBLE NOT NULL,
    MODIFY `magt_value` DOUBLE NOT NULL,
    MODIFY `dosf_value` DOUBLE NOT NULL;
