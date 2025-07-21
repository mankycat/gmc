const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCardUsage = async (data) => {
  return await prisma.cardUsage.create({ data });
};

const getCardUsageById = async (id) => {
  return await prisma.cardUsage.findUnique({ where: { id } });
};

const getCardUsagesByVirtualMachineId = async (virtualMachineId) => {
  return await prisma.cardUsage.findMany({ where: { virtualMachineId } });
};

const updateCardUsage = async (id, data) => {
  return await prisma.cardUsage.update({ where: { id }, data });
};

const deleteCardUsage = async (id) => {
  return await prisma.cardUsage.delete({ where: { id } });
};

const deleteCardUsages = async (ids) => {
  return await prisma.cardUsage.deleteMany({ where: { id: { in: ids } } });
};

const deleteCardUsagesByVirtualMachineId = async (virtualMachineId, tx = prisma) => {
  return await tx.cardUsage.deleteMany({
    where: { virtualMachineId },
  });
};

module.exports = {
  createCardUsage,
  getCardUsageById,
  getCardUsagesByVirtualMachineId,
  updateCardUsage,
  deleteCardUsage,
  deleteCardUsages,
  deleteCardUsagesByVirtualMachineId
};
