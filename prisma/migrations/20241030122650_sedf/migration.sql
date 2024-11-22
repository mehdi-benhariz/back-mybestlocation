/*
  Warnings:

  - You are about to drop the column `latitute` on the `location` table. All the data in the column will be lost.
  - You are about to drop the column `longtitute` on the `location` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "location" DROP COLUMN "latitute",
DROP COLUMN "longtitute",
ADD COLUMN     "latitude" TEXT NOT NULL,
ADD COLUMN     "longitude" TEXT NOT NULL;
