const gpuCardInstanceService = require('../services/gpuCardInstanceService');

const createGpuCardInstance = async (req, res) => {
  try {
    const result = await gpuCardInstanceService.createGpuCardInstance(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating GpuCardInstance:', error);
    if (error.message === 'Stock limit reached for this GPU model') {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

const getGpuCardInstance = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await gpuCardInstanceService.getGpuCardInstance(id);
    if (!result) {
      return res.status(404).json({ message: 'GpuCardInstance not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error fetching GpuCardInstance:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const listGpuCardInstances = async (req, res) => {
  try {
    const result = await gpuCardInstanceService.listGpuCardInstances();
    res.json(result);
  } catch (error) {
    console.error('Error listing GpuCardInstances:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateGpuCardInstance = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await gpuCardInstanceService.updateGpuCardInstance(id, req.body);
    res.json(result);
  } catch (error) {
    console.error('Error updating GpuCardInstance:', error);
    if (error.message === 'Stock limit reached for this GPU model') {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

const deleteGpuCardInstance = async (req, res) => {
  const { id } = req.params;
  try {
    await gpuCardInstanceService.deleteGpuCardInstance(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting GpuCardInstance:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createGpuCardInstance,
  getGpuCardInstance,
  listGpuCardInstances,
  updateGpuCardInstance,
  deleteGpuCardInstance
};
