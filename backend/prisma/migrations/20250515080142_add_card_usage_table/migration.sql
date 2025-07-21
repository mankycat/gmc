-- CreateTable
CREATE TABLE "CardUsage" (
    "id" TEXT NOT NULL,
    "cardIndex" INTEGER NOT NULL,
    "cardUuid" TEXT NOT NULL,
    "usage" TEXT,
    "virtualMachineId" TEXT NOT NULL,

    CONSTRAINT "CardUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CardUsage_virtualMachineId_idx" ON "CardUsage"("virtualMachineId");

-- AddForeignKey
ALTER TABLE "CardUsage" ADD CONSTRAINT "CardUsage_virtualMachineId_fkey" FOREIGN KEY ("virtualMachineId") REFERENCES "VirtualMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
