-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `remember_token` VARCHAR(100) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `auth_token` LONGTEXT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `default_address_id` INTEGER NULL DEFAULT 0,
    `delivery_pin` VARCHAR(191) NULL,
    `delivery_guy_detail_id` INTEGER UNSIGNED NOT NULL,
    `avatar` TEXT NULL,
    `is_active` TINYINT NOT NULL DEFAULT 1,
    `tax_number` VARCHAR(191) NULL,
    `user_ip` VARCHAR(191) NULL,

    UNIQUE INDEX `User_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Deliveryguydetails` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `vehicle_number` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `commision_rate` DECIMAL(8, 2) NOT NULL DEFAULT 5,
    `is_notifiable` TINYINT NULL DEFAULT 0,
    `max_accept_delivery_limit` INTEGER NOT NULL DEFAULT 100,
    `delivery_lat` VARCHAR(191) NULL,
    `delivery_long` VARCHAR(191) NULL,
    `heading` VARCHAR(191) NULL,
    `tip_commision_rate` DECIMAL(8, 2) NOT NULL DEFAULT 100,
    `status` TINYINT NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_delivery_guy_detail_id_fkey` FOREIGN KEY (`delivery_guy_detail_id`) REFERENCES `Deliveryguydetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
