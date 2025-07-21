import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
});

// Function to get token from local storage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Add a request interceptor to include the auth token in headers
api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    };
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
