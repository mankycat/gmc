const cardUsageRepository = require('../repositories/cardUsageRepository');

const createCardUsage = async (data, tx) => {
  console.log('createCardUsage called with data:', data);
  if (tx) {
    return await tx.cardUsage.create({ data });
  } else {
    return await cardUsageRepository.createCardUsage(data);
  }
};

const getCardUsageById = async (id) => {
  return await cardUsageRepository.getCardUsageById(id);
};

const getCardUsagesByVirtualMachineId = async (virtualMachineId) => {
  return await cardUsageRepository.getCardUsagesByVirtualMachineId(virtualMachineId);
};

const updateCardUsage = async (id, data) => {
  return await cardUsageRepository.updateCardUsage(id, data);
};

const deleteCardUsages = async (ids, tx) => {
  console.log('deleteCardUsages called with ids:', ids);
  if (!Array.isArray(ids)) {
    throw new Error('ids must be an array');
  }
  if (ids.length === 0) return;
  await cardUsageRepository.deleteCardUsages(ids, tx);
};

const deleteCardUsage = async (id, tx) => {
  console.log('deleteCardUsage called with id:', id);
  return await cardUsageRepository.deleteCardUsage(id, tx);
};

const deleteCardUsagesByVirtualMachineId = async (virtualMachineId, tx = prisma) => {
  return await cardUsageRepository.deleteCardUsagesByVirtualMachineId(virtualMachineId, tx);
};

module.exports = {
  createCardUsage,
  getCardUsageById,
  getCardUsagesByVirtualMachineId,
  updateCardUsage,
  deleteCardUsage,
  deleteCardUsagesByVirtualMachineId
};
