import api from './apiClient';

export const listUsers = async () => {
  const response = await api.get('/admin/users');
  return response.data;
};

export const getAdminUser = async (id: string) => {
  const response = await api.get(`/admin/users/${id}`);
  return response.data;
};

export const createAdminUser = async (userData: any) => {
  const response = await api.post('/admin/users', userData);
  return response.data;
};

export const updateAdminUser = async (id: string, userData: any) => {
  const response = await api.put(`/admin/users/${id}`, userData);
  return response.data;
};
