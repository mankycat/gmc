const virtualMachineService = require('../services/virtualMachineService');

const createVirtualMachine = async (req, res) => {
  try {
    const userId = req.user?.id || req.body.userId || 'unknown_user';
    const result = await virtualMachineService.createVirtualMachine(req.body, userId);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVirtualMachine = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await virtualMachineService.getVirtualMachine(id);
    if (!result) {
      res.status(404).json({ error: 'Virtual Machine not found' });
    } else {
      res.json(result);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listVirtualMachines = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const result = await virtualMachineService.listVirtualMachines(page, limit);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateVirtualMachine = async (req, res) => {
  try {
    const id = req.params.id;
    const { cardUsagesToDelete, ...data } = req.body;
    console.log('updateVirtualMachine controller called with id:', id, 'data:', data, 'cardUsagesToDelete:', cardUsagesToDelete);
    const result = await virtualMachineService.updateVirtualMachine(id, data, cardUsagesToDelete);
    res.json(result);
  } catch (error) {
    console.error('Error in updateVirtualMachine controller:', error);
    res.status(400).json({ error: error.message });
  }
};

const deleteVirtualMachine = async (req, res) => {
  try {
    const id = req.params.id;
    await virtualMachineService.deleteVirtualMachine(id);
    res.status(204).json({ message: 'Virtual Machine deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createVirtualMachine,
  getVirtualMachine,
  listVirtualMachines,
  updateVirtualMachine,
  deleteVirtualMachine
};
