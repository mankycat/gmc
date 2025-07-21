/*
  Warnings:

  - The primary key for the `GpuCard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `GpuCard` table. All the data in the column will be lost.
  - You are about to drop the column `memory_gb` on the `GpuCard` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `GpuCard` table. All the data in the column will be lost.
  - The primary key for the `VirtualMachine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `assigned_gpu_card_id` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the column `assigned_gpu_card_index_id` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the column `gpu_resource_slice_description` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the column `host_server_id` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the column `internal_ip_address` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the column `name_label` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the column `ram_gb_assigned` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the column `vcpu_cores_assigned` on the `VirtualMachine` table. All the data in the column will be lost.
  - You are about to drop the `servers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `memoryGb` to the `GpuCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `GpuCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostServerId` to the `VirtualMachine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameLabel` to the `VirtualMachine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ramGbAssigned` to the `VirtualMachine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `VirtualMachine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vcpuCoresAssigned` to the `VirtualMachine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GpuCard" DROP CONSTRAINT "GpuCard_serverId_fkey";

-- DropForeignKey
ALTER TABLE "VirtualMachine" DROP CONSTRAINT "VirtualMachine_assigned_gpu_card_id_fkey";

-- DropForeignKey
ALTER TABLE "VirtualMachine" DROP CONSTRAINT "VirtualMachine_host_server_id_fkey";

-- AlterTable
ALTER TABLE "GpuCard" DROP CONSTRAINT "GpuCard_pkey",
DROP COLUMN "created_at",
DROP COLUMN "memory_gb",
DROP COLUMN "updated_at",
ADD COLUMN     "memoryGb" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "model" SET DATA TYPE TEXT,
ALTER COLUMN "serverId" SET DATA TYPE TEXT,
ADD CONSTRAINT "GpuCard_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "GpuCard_id_seq";

-- AlterTable
ALTER TABLE "VirtualMachine" DROP CONSTRAINT "VirtualMachine_pkey",
DROP COLUMN "assigned_gpu_card_id",
DROP COLUMN "assigned_gpu_card_index_id",
DROP COLUMN "created_at",
DROP COLUMN "gpu_resource_slice_description",
DROP COLUMN "host_server_id",
DROP COLUMN "internal_ip_address",
DROP COLUMN "name_label",
DROP COLUMN "ram_gb_assigned",
DROP COLUMN "updated_at",
DROP COLUMN "vcpu_cores_assigned",
ADD COLUMN     "assignedGpuCardId" TEXT,
ADD COLUMN     "assignedToUserEmail" TEXT,
ADD COLUMN     "gpuResourceSliceDescription" TEXT,
ADD COLUMN     "hostServerId" TEXT NOT NULL,
ADD COLUMN     "internalIpAddress" TEXT,
ADD COLUMN     "nameLabel" TEXT NOT NULL,
ADD COLUMN     "ramGbAssigned" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "vcpuCoresAssigned" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "VirtualMachine_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "VirtualMachine_id_seq";

-- DropTable
DROP TABLE "servers";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'pending_approval',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "nameLabel" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "cpuModel" TEXT NOT NULL,
    "cpuCores" INTEGER NOT NULL,
    "memoryGb" INTEGER NOT NULL,
    "diskSpec" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "purpose" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Server_ipAddress_key" ON "Server"("ipAddress");

-- AddForeignKey
ALTER TABLE "Server" ADD CONSTRAINT "Server_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GpuCard" ADD CONSTRAINT "GpuCard_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GpuCard" ADD CONSTRAINT "GpuCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VirtualMachine" ADD CONSTRAINT "VirtualMachine_hostServerId_fkey" FOREIGN KEY ("hostServerId") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VirtualMachine" ADD CONSTRAINT "VirtualMachine_assignedGpuCardId_fkey" FOREIGN KEY ("assignedGpuCardId") REFERENCES "GpuCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VirtualMachine" ADD CONSTRAINT "VirtualMachine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
