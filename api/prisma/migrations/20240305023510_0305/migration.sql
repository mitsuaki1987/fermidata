-- CreateTable
CREATE TABLE `materials` (
    `material_id` INTEGER NOT NULL AUTO_INCREMENT,
    `material_code` VARCHAR(128) NOT NULL,
    `eform_value` DECIMAL(30, 20) NOT NULL,
    `magt_value` DECIMAL(30, 20) NOT NULL,
    `dosf_value` DECIMAL(30, 20) NOT NULL,
    `material_composition` VARCHAR(128) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `materials_material_code_key`(`material_code`),
    PRIMARY KEY (`material_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `types` (
    `type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `material_id` INTEGER NOT NULL,
    `element_symbol_id` INTEGER NOT NULL,
    `nat_value` INTEGER NOT NULL,
    `element_data` JSON NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `types_material_id_idx`(`material_id`),
    INDEX `types_element_symbol_id_idx`(`element_symbol_id`),
    PRIMARY KEY (`type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `element_symbol` (
    `element_symbol_id` INTEGER NOT NULL AUTO_INCREMENT,
    `atomic_number` INTEGER NOT NULL,
    `element_symbol` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`element_symbol_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `types` ADD CONSTRAINT `types_material_id_fkey` FOREIGN KEY (`material_id`) REFERENCES `materials`(`material_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `types` ADD CONSTRAINT `types_element_symbol_id_fkey` FOREIGN KEY (`element_symbol_id`) REFERENCES `element_symbol`(`element_symbol_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
