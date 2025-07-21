const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createGpuCardInstance = async (data) => {
  try {
    const result = await prisma.gpuCardInstance.create({ data });
    return result;
  } catch (error) {
    console.error('Error creating GpuCardInstance record in database:', error);
    throw error;
  }
};

const getGpuCardInstanceById = async (id) => {
  return await prisma.gpuCardInstance.findUnique({ where: { id } });
};

const getAllGpuCardInstances = async () => {
  return await prisma.gpuCardInstance.findMany({
    include: { gpuCardModel: true, server: true }
  });
};

const updateGpuCardInstance = async (id, data) => {
  if (!data.gpuCardModelId || !data.serverId || !data.count) {
    throw new Error('Missing required fields: gpuCardModelId, serverId, or count');
  }
  return await prisma.gpuCardInstance.update({ where: { id }, data });
};

const deleteGpuCardInstance = async (id) => {
  return await prisma.gpuCardInstance.delete({ where: { id } });
};

const getGpuCardInstancesCountByModelId = async (gpuCardModelId) => {
  const instances = await prisma.gpuCardInstance.findMany({
    where: { gpuCardModelId },
  });
  return instances.reduce((sum, instance) => sum + instance.count, 0);
};

module.exports = {
  createGpuCardInstance,
  getGpuCardInstanceById,
  getAllGpuCardInstances,
  updateGpuCardInstance,
  deleteGpuCardInstance,
  getGpuCardInstancesCountByModelId
};
