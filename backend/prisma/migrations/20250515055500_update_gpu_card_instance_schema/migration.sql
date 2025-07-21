/*
  Warnings:

  - You are about to drop the column `notes` on the `GpuCardInstance` table. All the data in the column will be lost.
  - You are about to drop the column `purchaseDate` on the `GpuCardInstance` table. All the data in the column will be lost.
  - You are about to drop the column `serialNumber` on the `GpuCardInstance` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `GpuCardInstance` table. All the data in the column will be lost.
  - You are about to drop the `_vmGpuInstances` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `count` to the `GpuCardInstance` table without a default value. This is not possible if the table is not empty.
  - Made the column `serverId` on table `GpuCardInstance` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "GpuCardInstance" DROP CONSTRAINT "GpuCardInstance_serverId_fkey";

-- DropForeignKey
ALTER TABLE "_vmGpuInstances" DROP CONSTRAINT "_vmGpuInstances_A_fkey";

-- DropForeignKey
ALTER TABLE "_vmGpuInstances" DROP CONSTRAINT "_vmGpuInstances_B_fkey";

-- DropIndex
DROP INDEX "GpuCardInstance_serialNumber_key";

-- AlterTable
ALTER TABLE "GpuCardInstance" DROP COLUMN "notes",
DROP COLUMN "purchaseDate",
DROP COLUMN "serialNumber",
DROP COLUMN "status",
ADD COLUMN     "count" INTEGER NOT NULL,
ALTER COLUMN "serverId" SET NOT NULL;

-- DropTable
DROP TABLE "_vmGpuInstances";

-- AddForeignKey
ALTER TABLE "GpuCardInstance" ADD CONSTRAINT "GpuCardInstance_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
