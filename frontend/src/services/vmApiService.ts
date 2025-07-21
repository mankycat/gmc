import api from './apiClient';

export const listVirtualMachines = async (page: number = 1, limit: number = 10) => {
  const response = await api.get('/virtual-machines', {
    params: { page, limit }
  });
  return response.data;
};

export const getVirtualMachine = async (id: string) => {
  const response = await api.get(`/virtual-machines/${id}`);
  return response.data;
};

export const createVirtualMachine = async (data: any) => {
  const response = await api.post('/virtual-machines', data);
  return response.data;
};

export const updateVirtualMachine = async (id: string, data: any) => {
  const response = await api.put(`/virtual-machines/${id}`, data);
  return response.data;
};

export const deleteVirtualMachine = async (id: string) => {
  await api.delete(`/virtual-machines/${id}`);
};
