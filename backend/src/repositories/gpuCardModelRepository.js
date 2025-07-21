const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createGpuCardModel = async (data) => {
  try {
    const { vendor, modelName, architecture, memoryGb, totalAcquiredStock } = data;
    const result = await prisma.gpuCardModel.create({
      data: {
        vendor,
        modelName,
        architecture,
        memoryGb,
        totalAcquiredStock,
      },
    });
    return result;
  } catch (error) {
    console.error('Error creating GpuCardModel record in database:', error);
    throw error;
  }
};

const getGpuCardModelById = async (id) => {
  return await prisma.gpuCardModel.findUnique({ where: { id } });
};

const getAllGpuCardModels = async () => {
  return await prisma.gpuCardModel.findMany();
};

const updateGpuCardModel = async (id, data) => {
  const { vendor, modelName, architecture, memoryGb, totalAcquiredStock } = data;
  return await prisma.gpuCardModel.update({
    where: { id },
    data: {
      vendor,
      modelName,
      architecture,
      memoryGb,
      totalAcquiredStock,
    },
  });
};

const deleteGpuCardModel = async (id) => {
  return await prisma.gpuCardModel.delete({ where: { id } });
};

module.exports = {
  createGpuCardModel,
  getGpuCardModelById,
  getAllGpuCardModels,
  updateGpuCardModel,
  deleteGpuCardModel
};
