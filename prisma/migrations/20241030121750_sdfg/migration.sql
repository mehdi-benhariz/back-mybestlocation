/*
  Warnings:

  - The primary key for the `location` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "location" DROP CONSTRAINT "location_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "location_pkey" PRIMARY KEY ("id");
