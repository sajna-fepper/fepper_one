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
    UNIQUE INDEX `User_delivery_guy_detail_id_key`(`delivery_guy_detail_id`),
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

-- CreateTable
CREATE TABLE `Restaurants` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `location_id` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `rating` VARCHAR(191) NULL,
    `delivery_time` VARCHAR(191) NULL,
    `price_range` VARCHAR(191) NULL,
    `is_pureveg` TINYINT NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `slug` VARCHAR(191) NULL,
    `placeholder_image` VARCHAR(191) NULL,
    `latitude` VARCHAR(191) NULL,
    `longitude` VARCHAR(191) NULL,
    `certificate` VARCHAR(191) NULL,
    `restaurant_charges` DECIMAL(20, 2) NULL,
    `delivery_charges` DECIMAL(20, 2) NULL,
    `address` TEXT NOT NULL,
    `pincode` VARCHAR(191) NULL,
    `landmark` TEXT NULL,
    `sku` VARCHAR(191) NOT NULL,
    `is_active` TINYINT NOT NULL DEFAULT 0,
    `is_accepted` TINYINT NOT NULL DEFAULT 0,
    `is_featured` TINYINT NOT NULL DEFAULT 0,
    `commision_rate` DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
    `delivery_type` INTEGER NOT NULL DEFAULT 1,
    `delivery_radius` DECIMAL(8, 2) NOT NULL DEFAULT 10.00,
    `delivery_charge_type` VARCHAR(191) NULL DEFAULT 'FIXED',
    `base_delivery_charge` DECIMAL(20, 2) NULL,
    `base_delivery_distance` INTEGER NULL,
    `extra_delivery_charge` DECIMAL(20, 2) NULL,
    `extra_delivery_distance` INTEGER NULL,
    `min_order_price` DECIMAL(20, 2) NOT NULL DEFAULT 0.00,
    `is_notifiable` TINYINT NULL DEFAULT 0,
    `auto_acceptable` TINYINT NOT NULL DEFAULT 0,
    `schedule_data` LONGTEXT NULL,
    `is_schedulable` TINYINT NOT NULL DEFAULT 0,
    `order_column` INTEGER NULL,
    `custom_message` LONGTEXT NULL,
    `is_orderscheduling` TINYINT NOT NULL DEFAULT 0,
    `branch_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `unique_order_id` VARCHAR(191) NOT NULL,
    `orderstatus_id` INTEGER NOT NULL DEFAULT 1,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `coupon_name` VARCHAR(191) NULL,
    `location` MEDIUMTEXT NULL,
    `address` VARCHAR(191) NOT NULL,
    `tax` DECIMAL(20, 2) NULL,
    `restaurant_charge` DECIMAL(20, 2) NULL,
    `delivery_charge` DECIMAL(20, 2) NULL,
    `total` DECIMAL(20, 2) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `payment_mode` VARCHAR(191) NOT NULL,
    `order_comment` TEXT NULL,
    `restaurant_id` INTEGER UNSIGNED NOT NULL,
    `transaction_id` TEXT NULL,
    `delivery_type` INTEGER NOT NULL DEFAULT 1,
    `payable` DECIMAL(20, 0) NOT NULL DEFAULT 0.00,
    `wallet_amount` DECIMAL(8, 2) NULL,
    `tip_amount` DECIMAL(8, 2) NULL,
    `tax_amount` DECIMAL(8, 2) NULL,
    `coupon_amount` DECIMAL(8, 2) NULL,
    `coupon_isrestaurant` TINYINT NOT NULL DEFAULT 1,
    `sub_total` DECIMAL(8, 2) NULL,
    `cash_change_amount` INTEGER NULL,
    `restaurant_tax` VARCHAR(255) NULL,
    `online_payment_status` TEXT NULL,
    `rain_charge` DECIMAL(20, 2) NOT NULL DEFAULT 0.00,
    `extra_charge` DECIMAL(20, 2) NOT NULL DEFAULT 0.00,
    `extra_title` VARCHAR(191) NULL DEFAULT 'Rain Surge',

    UNIQUE INDEX `Orders_user_id_key`(`user_id`),
    UNIQUE INDEX `Orders_restaurant_id_key`(`restaurant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_delivery_guy_detail_id_fkey` FOREIGN KEY (`delivery_guy_detail_id`) REFERENCES `Deliveryguydetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
