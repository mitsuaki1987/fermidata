/*
  Warnings:

  - You are about to alter the column `magt_value` on the `materials` table. The data in that column could be lost. The data in that column will be cast from `Decimal(30,20)` to `Decimal(65,30)`.
  - You are about to alter the column `dosf_value` on the `materials` table. The data in that column could be lost. The data in that column will be cast from `Decimal(30,20)` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `materials` MODIFY `magt_value` DECIMAL(65, 30) NOT NULL,
    MODIFY `dosf_value` DECIMAL(65, 30) NOT NULL;
