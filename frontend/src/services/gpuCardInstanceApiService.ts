import api from './apiClient';

interface GpuCardInstance {
  id: string;
  count: number;
  gpuCardModelId: string;
  serverId: string;
}

export const getGpuCardInstances = async (): Promise<GpuCardInstance[]> => {
  const response = await api.get('/gpu-card-instances');
  return response.data as GpuCardInstance[];
};

export const getGpuCardInstance = async (id: string): Promise<GpuCardInstance> => {
  const response = await api.get(`/gpu-card-instances/${id}`);
  return response.data as GpuCardInstance;
};

export const createGpuCardInstance = async (gpuCardInstanceData: Omit<GpuCardInstance, 'id'>): Promise<GpuCardInstance> => {
  const response = await api.post('/gpu-card-instances', gpuCardInstanceData);
  return response.data as GpuCardInstance;
};

export const updateGpuCardInstance = async (id: string, gpuCardInstanceData: Omit<GpuCardInstance, 'id'>): Promise<GpuCardInstance> => {
  const response = await api.put(`/gpu-card-instances/${id}`, gpuCardInstanceData);
  return response.data as GpuCardInstance;
};

export const deleteGpuCardInstance = async (id: string): Promise<void> => {
  await api.delete(`/gpu-card-instances/${id}`);
};

export const getGpuCardInstancesByServer = async (serverId: string): Promise<GpuCardInstance[]> => {
  const response = await api.get(`/gpu-card-instances?serverId=${serverId}`);
  return response.data as GpuCardInstance[];
};
