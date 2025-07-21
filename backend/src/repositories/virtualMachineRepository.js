const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createVirtualMachine = async (data) => {
  const { nameLabel, vcpuCoresAssigned, ramGbAssigned, gpuResourceSlice, purpose, internalIpAddress, hostServerId, userId } = data;

  return await prisma.virtualMachine.create({
    data: {
      nameLabel,
      vcpuCoresAssigned: parseInt(vcpuCoresAssigned),
      ramGbAssigned: parseInt(ramGbAssigned),
      gpuResourceSlice,
      purpose,
      internalIpAddress,
      hostServer: { connect: { id: hostServerId } },
      user: { connect: { id: userId } }
    }
  });
};

const getVirtualMachineById = async (id) => {
  return await prisma.virtualMachine.findUnique({ where: { id } });
};

const getAllVirtualMachines = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const virtualMachines = await prisma.virtualMachine.findMany({
    skip,
    take: limit,
    include: { hostServer: true, user: true }
  });
  const totalCount = await prisma.virtualMachine.count();
  return { virtualMachines, totalCount };
};

const updateVirtualMachine = async (id, data, tx = prisma) => {
  const { hostServerId, userId, cardUsages, vcpuCoresAssigned, ramGbAssigned, ...rest } = data;

  return await tx.virtualMachine.update({
    where: { id },
    data: {
      ...rest,
      vcpuCoresAssigned: vcpuCoresAssigned ? parseInt(vcpuCoresAssigned) : undefined,
      ramGbAssigned: ramGbAssigned ? parseInt(ramGbAssigned) : undefined,
      hostServer: { connect: { id: hostServerId } },
      user: { connect: { id: userId } },
    },
  });
};

const deleteVirtualMachine = async (id) => {
  // Add business logic here if needed
  return await prisma.virtualMachine.delete({ where: { id } });
};

module.exports = {
  createVirtualMachine,
  getVirtualMachineById,
  getAllVirtualMachines,
  updateVirtualMachine,
  deleteVirtualMachine
};
