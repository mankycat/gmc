/*
  Warnings:

  - Added the required column `gpuModel` to the `GpuCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GpuCard" ADD COLUMN     "gpuModel" TEXT NOT NULL;
