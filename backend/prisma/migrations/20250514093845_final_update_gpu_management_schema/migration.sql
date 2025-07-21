/*
  Warnings:

  - You are about to drop the column `assignedGpuCardId` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the `GpuCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GpuCard" DROP CONSTRAINT "GpuCard_serverId_fkey";

-- DropForeignKey
ALTER TABLE "GpuCard" DROP CONSTRAINT "GpuCard_userId_fkey";

-- DropForeignKey
ALTER TABLE "VirtualMachine" DROP CONSTRAINT "VirtualMachine_assignedGpuCardId_fkey";

-- AlterTable
ALTER TABLE "VirtualMachine" DROP COLUMN "assignedGpuCardId";

-- DropTable
DROP TABLE "GpuCard";

-- CreateTable
CREATE TABLE "GpuCardModel" (
    "id" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "modelName" TEXT NOT NULL,
    "architecture" TEXT,
    "memoryGb" INTEGER NOT NULL,

    CONSTRAINT "GpuCardModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GpuCardInstance" (
    "id" TEXT NOT NULL,
    "serialNumber" TEXT,
    "status" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(3),
    "notes" TEXT,
    "gpuCardModelId" TEXT NOT NULL,
    "serverId" TEXT,

    CONSTRAINT "GpuCardInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_vmGpuInstances" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_vmGpuInstances_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "GpuCardModel_vendor_modelName_key" ON "GpuCardModel"("vendor", "modelName");

-- CreateIndex
CREATE UNIQUE INDEX "GpuCardInstance_serialNumber_key" ON "GpuCardInstance"("serialNumber");

-- CreateIndex
CREATE INDEX "_vmGpuInstances_B_index" ON "_vmGpuInstances"("B");

-- AddForeignKey
ALTER TABLE "GpuCardInstance" ADD CONSTRAINT "GpuCardInstance_gpuCardModelId_fkey" FOREIGN KEY ("gpuCardModelId") REFERENCES "GpuCardModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GpuCardInstance" ADD CONSTRAINT "GpuCardInstance_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_vmGpuInstances" ADD CONSTRAINT "_vmGpuInstances_A_fkey" FOREIGN KEY ("A") REFERENCES "GpuCardInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_vmGpuInstances" ADD CONSTRAINT "_vmGpuInstances_B_fkey" FOREIGN KEY ("B") REFERENCES "VirtualMachine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
