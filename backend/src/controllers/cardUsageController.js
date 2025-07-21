const cardUsageService = require('../services/cardUsageService');

const createCardUsage = async (req, res) => {
  try {
    const data = req.body;
    const cardUsage = await cardUsageService.createCardUsage(data);
    res.status(201).json(cardUsage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create CardUsage' });
  }
};

const getCardUsageById = async (req, res) => {
  try {
    const id = req.params.id;
    const cardUsage = await cardUsageService.getCardUsageById(id);
    if (!cardUsage) {
      res.status(404).json({ message: 'CardUsage not found' });
    } else {
      res.json(cardUsage);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get CardUsage' });
  }
};

const getCardUsagesByVirtualMachineId = async (req, res) => {
  try {
    const virtualMachineId = req.params.virtualMachineId;
    const cardUsages = await cardUsageService.getCardUsagesByVirtualMachineId(virtualMachineId);
    res.json(cardUsages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get CardUsages' });
  }
};

const updateCardUsage = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const cardUsage = await cardUsageService.updateCardUsage(id, data);
    res.json(cardUsage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update CardUsage' });
  }
};

const deleteCardUsage = async (req, res) => {
  try {
    const id = req.params.id;
    await cardUsageService.deleteCardUsage(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete CardUsage' });
  }
};

module.exports = {
  createCardUsage,
  getCardUsageById,
  getCardUsagesByVirtualMachineId,
  updateCardUsage,
  deleteCardUsage
};
