import api from './apiClient';

interface GpuCardModel {
  id: string;
  vendor: string;
  modelName: string;
  architecture: string | null;
  memoryGb: number;
  totalAcquiredStock: number;
}

export const getGpuCardModels = async (): Promise<GpuCardModel[]> => {
  const response = await api.get('/gpu-card-models');
  return response.data as GpuCardModel[];
};

export const getGpuCardModel = async (id: string): Promise<GpuCardModel> => {
  const response = await api.get(`/gpu-card-models/${id}`);
  return response.data as GpuCardModel;
};

export const createGpuCardModel = async (gpuCardModelData: Omit<GpuCardModel, 'id'>): Promise<GpuCardModel> => {
  const response = await api.post('/gpu-card-models', gpuCardModelData);
  return response.data as GpuCardModel;
};

export const updateGpuCardModel = async (id: string, gpuCardModelData: Omit<GpuCardModel, 'id'>): Promise<GpuCardModel> => {
  const response = await api.put(`/gpu-card-models/${id}`, gpuCardModelData);
  return response.data as GpuCardModel;
};

export const deleteGpuCardModel = async (id: string): Promise<void> => {
  await api.delete(`/gpu-card-models/${id}`);
};
