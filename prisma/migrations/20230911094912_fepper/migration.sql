/*
  Warnings:

  - A unique constraint covering the columns `[delivery_guy_detail_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_delivery_guy_detail_id_key` ON `User`(`delivery_guy_detail_id`);
