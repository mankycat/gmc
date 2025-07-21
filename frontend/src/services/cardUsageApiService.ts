import apiClient from './apiClient';

const createCardUsage = async (data: any) => {
  const response = await apiClient.post('/api/card-usages', data);
  return response.data;
};

const getCardUsageById = async (id: string) => {
  const response = await apiClient.get(`/api/card-usages/${id}`);
  return response.data;
};

const getCardUsagesByVirtualMachineId = async (virtualMachineId: string) => {
  const response = await apiClient.get(`/api/virtual-machines/${virtualMachineId}/card-usages`);
  return response.data;
};

const updateCardUsage = async (id: string, data: any) => {
  const response = await apiClient.put(`/api/card-usages/${id}`, data);
  return response.data;
};

const deleteCardUsage = async (id: string) => {
  await apiClient.delete(`/api/card-usages/${id}`);
};

export default {
  createCardUsage,
  getCardUsageById,
  getCardUsagesByVirtualMachineId,
  updateCardUsage,
  deleteCardUsage
};
