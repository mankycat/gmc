const virtualMachineRepository = require('../repositories/virtualMachineRepository');
const cardUsageService = require('./cardUsageService');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createVirtualMachine = async (data, userId) => {
  data.userId = userId; // Automatically set the current user's ID
  const virtualMachine = await virtualMachineRepository.createVirtualMachine(data);
  if (data.cardUsages && data.cardUsages.length > 0) {
    await Promise.all(data.cardUsages.map((cardUsage) => cardUsageService.createCardUsage({ ...cardUsage, virtualMachineId: virtualMachine.id })));
  }
  return virtualMachine;
};

const getVirtualMachine = async (id) => {
  const virtualMachine = await virtualMachineRepository.getVirtualMachineById(id);
  if (virtualMachine) {
    virtualMachine.cardUsages = await cardUsageService.getCardUsagesByVirtualMachineId(id);
  }
  return virtualMachine;
};

const listVirtualMachines = async (page = 1, limit = 10) => {
  const result = await virtualMachineRepository.getAllVirtualMachines(page, limit);
  for (const vm of result.virtualMachines) {
    vm.cardUsages = await cardUsageService.getCardUsagesByVirtualMachineId(vm.id);
  }
  return result;
};

const updateVirtualMachine = async (id, data, cardUsagesToDelete) => {
  try {
    return await prisma.$transaction(async (tx) => {
      const updatedVm = await virtualMachineRepository.updateVirtualMachine(id, data, tx);
      
      if (data.cardUsages && Array.isArray(data.cardUsages)) {
        await cardUsageService.deleteCardUsagesByVirtualMachineId(id, tx);
        await Promise.all(data.cardUsages.map((cardUsage) => {
          return cardUsageService.createCardUsage({ ...cardUsage, virtualMachineId: id }, tx);
        }));
      }
      
      return updatedVm;
    });
  } catch (error) {
    console.error('Error in updateVirtualMachine service:', error);
    throw error;
  }
};

const deleteVirtualMachine = async (id) => {
  // Add business logic here if needed
  return await virtualMachineRepository.deleteVirtualMachine(id);
};

module.exports = {
  createVirtualMachine,
  getVirtualMachine,
  listVirtualMachines,
  updateVirtualMachine,
  deleteVirtualMachine
};
