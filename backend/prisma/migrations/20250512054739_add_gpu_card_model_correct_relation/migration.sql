-- CreateTable
CREATE TABLE "GpuCard" (
    "id" SERIAL NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "memory_gb" INTEGER NOT NULL,
    "purpose" TEXT,
    "notes" TEXT,
    "serverId" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GpuCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GpuCard" ADD CONSTRAINT "GpuCard_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "servers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
