-- CreateTable
CREATE TABLE "VirtualMachine" (
    "id" SERIAL NOT NULL,
    "name_label" VARCHAR(255) NOT NULL,
    "host_server_id" INTEGER NOT NULL,
    "assigned_gpu_card_id" INTEGER,
    "assigned_gpu_card_index_id" INTEGER,
    "vcpu_cores_assigned" INTEGER,
    "ram_gb_assigned" INTEGER,
    "gpu_resource_slice_description" TEXT,
    "purpose" TEXT,
    "internal_ip_address" VARCHAR(255),
    "notes" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VirtualMachine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VirtualMachine" ADD CONSTRAINT "VirtualMachine_host_server_id_fkey" FOREIGN KEY ("host_server_id") REFERENCES "servers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VirtualMachine" ADD CONSTRAINT "VirtualMachine_assigned_gpu_card_id_fkey" FOREIGN KEY ("assigned_gpu_card_id") REFERENCES "GpuCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
