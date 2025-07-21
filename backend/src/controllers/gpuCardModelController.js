const gpuCardModelService = require('../services/gpuCardModelService');

const createGpuCardModel = async (req, res) => {
  try {
    const result = await gpuCardModelService.createGpuCardModel(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating GpuCardModel:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getGpuCardModel = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await gpuCardModelService.getGpuCardModel(id);
    if (!result) {
      return res.status(404).json({ message: 'GpuCardModel not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error fetching GpuCardModel:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const listGpuCardModels = async (req, res) => {
  try {
    const result = await gpuCardModelService.listGpuCardModels();
    res.json(result);
  } catch (error) {
    console.error('Error listing GpuCardModels:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateGpuCardModel = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await gpuCardModelService.updateGpuCardModel(id, req.body);
    res.json(result);
  } catch (error) {
    console.error('Error updating GpuCardModel:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteGpuCardModel = async (req, res) => {
  const { id } = req.params;
  try {
    await gpuCardModelService.deleteGpuCardModel(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting GpuCardModel:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createGpuCardModel,
  getGpuCardModel,
  listGpuCardModels,
  updateGpuCardModel,
  deleteGpuCardModel
};
