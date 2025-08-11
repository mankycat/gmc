import axios from 'axios';

// 優先用 .env 的 VITE_API_BASE，否則預設 /api 走 Vite 代理
const baseURL =
  import.meta.env?.VITE_API_BASE && import.meta.env.VITE_API_BASE.trim() !== ''
    ? import.meta.env.VITE_API_BASE
    : '/api'

const api = axios.create({ baseURL })

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
  console.log('[REQ]', config.method?.toUpperCase(), config.baseURL + (config.url || ''));
  return config;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use(
  (res) => { console.log('[RES]', res.status, res.config.url); return res; },
  (err) => { console.error('[ERR]', err.config?.url, err.message); throw err; }
);

export default api;
