const gpuCardInstanceRepository = require('../repositories/gpuCardInstanceRepository');

const gpuCardModelRepository = require('../repositories/gpuCardModelRepository');

const createGpuCardInstance = async (data) => {
  try {
    const { gpuCardModelId } = data;
    const gpuCardModel = await gpuCardModelRepository.getGpuCardModelById(gpuCardModelId);
    if (!gpuCardModel) {
      throw new Error('GpuCardModel not found');
    }

    const existingInstancesCount = await gpuCardInstanceRepository.getGpuCardInstancesCountByModelId(gpuCardModelId);
    if (existingInstancesCount + data.count > gpuCardModel.totalAcquiredStock) {
      throw new Error('Stock limit reached for this GPU model');
    }

    const result = await gpuCardInstanceRepository.createGpuCardInstance(data);
    return result;
  } catch (error) {
    console.error('Error creating GpuCardInstance:', error);
    throw error;
  }
};

const getGpuCardInstance = async (id) => {
  return await gpuCardInstanceRepository.getGpuCardInstanceById(id);
};

const listGpuCardInstances = async () => {
  return await gpuCardInstanceRepository.getAllGpuCardInstances();
};

const updateGpuCardInstance = async (id, data) => {
  try {
    const existingInstance = await gpuCardInstanceRepository.getGpuCardInstanceById(id);
    if (!existingInstance) {
      throw new Error('GpuCardInstance not found');
    }

    const gpuCardModelId = data.gpuCardModelId || existingInstance.gpuCardModelId;
    const gpuCardModel = await gpuCardModelRepository.getGpuCardModelById(gpuCardModelId);
    if (!gpuCardModel) {
      throw new Error('GpuCardModel not found');
    }

    const existingInstancesCount = await gpuCardInstanceRepository.getGpuCardInstancesCountByModelId(gpuCardModelId);
    if (existingInstancesCount + (data.count || existingInstance.count) - existingInstance.count > gpuCardModel.totalAcquiredStock) {
      throw new Error('Stock limit reached for this GPU model');
    }

    const result = await gpuCardInstanceRepository.updateGpuCardInstance(id, data);
    return result;
  } catch (error) {
    console.error('Error updating GpuCardInstance:', error);
    throw error;
  }
};

const deleteGpuCardInstance = async (id) => {
  return await gpuCardInstanceRepository.deleteGpuCardInstance(id);
};

module.exports = {
  createGpuCardInstance,
  getGpuCardInstance,
  listGpuCardInstances,
  updateGpuCardInstance,
  deleteGpuCardInstance
};
