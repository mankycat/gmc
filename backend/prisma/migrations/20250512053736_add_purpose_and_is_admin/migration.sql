-- CreateTable
CREATE TABLE "servers" (
    "id" SERIAL NOT NULL,
    "name_label" VARCHAR(255) NOT NULL,
    "ip_address" VARCHAR(255) NOT NULL,
    "cpu_model" VARCHAR(255),
    "cpu_cores" INTEGER,
    "memory_gb" INTEGER,
    "disk_spec" VARCHAR(255),
    "os" VARCHAR(255),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "purpose" TEXT,

    CONSTRAINT "servers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'pending_approval',
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "servers_ip_address_key" ON "servers"("ip_address");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
