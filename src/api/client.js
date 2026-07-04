import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.125:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token');
    }
    const message = error.response?.data?.detail || '요청에 실패했습니다.';
    return Promise.reject(new Error(message));
  }
);

export default instance;

export function setToken(token) {
  localStorage.setItem('access_token', token);
}