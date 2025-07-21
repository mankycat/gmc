import api from './apiClient';

export const getServers = async () => {
  const response = await api.get('/servers');
  return response.data;
};

export const listServers = async () => {
  try {
    const response = await api.get('/servers');
    return response.data as { id: string; nameLabel: string }[];
  } catch (error) {
    console.error('Error listing servers:', error);
    throw error;
  }
};

export const getServer = async (id: string) => {
  const response = await api.get(`/servers/${id}`);
  return response.data;
};

export const createServer = async (serverData: any) => {
  const response = await api.post('/servers', serverData);
  return response.data;
};

export const updateServer = async (id: string, serverData: any) => {
  const response = await api.put(`/servers/${id}`, serverData);
  return response.data;
};

export const deleteServer = async (id: string) => {
  await api.delete(`/servers/${id}`);
};
