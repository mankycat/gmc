/*
  Warnings:

  - You are about to drop the column `gpuResourceSliceDescription` on the `VirtualMachine` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nameLabel]` on the table `VirtualMachine` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[internalIpAddress]` on the table `VirtualMachine` will be added. If there are existing duplicate values, this will fail.
  - Made the column `internalIpAddress` on table `VirtualMachine` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "VirtualMachine" DROP COLUMN "gpuResourceSliceDescription",
ADD COLUMN     "gpuResourceSlice" TEXT,
ALTER COLUMN "internalIpAddress" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VirtualMachine_nameLabel_key" ON "VirtualMachine"("nameLabel");

-- CreateIndex
CREATE UNIQUE INDEX "VirtualMachine_internalIpAddress_key" ON "VirtualMachine"("internalIpAddress");
