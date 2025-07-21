const gpuCardModelRepository = require('../repositories/gpuCardModelRepository');

const createGpuCardModel = async (data) => {
  try {
    const result = await gpuCardModelRepository.createGpuCardModel(data);
    return result;
  } catch (error) {
    console.error('Error creating GpuCardModel:', error);
    throw error;
  }
};

const getGpuCardModel = async (id) => {
  return await gpuCardModelRepository.getGpuCardModelById(id);
};

const listGpuCardModels = async () => {
  return await gpuCardModelRepository.getAllGpuCardModels();
};

const updateGpuCardModel = async (id, data) => {
  return await gpuCardModelRepository.updateGpuCardModel(id, data);
};

const deleteGpuCardModel = async (id) => {
  return await gpuCardModelRepository.deleteGpuCardModel(id);
};

module.exports = {
  createGpuCardModel,
  getGpuCardModel,
  listGpuCardModels,
  updateGpuCardModel,
  deleteGpuCardModel
};
