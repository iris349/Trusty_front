import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ranger-jailbird-yarn.ngrok-free.dev',
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

      // 이미 로그인 페이지에 있으면 중복 알림/이동 방지
      if (window.location.pathname !== '/login') {
        alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
        window.location.href = '/login';
      }
    }
    const message = error.response?.data?.detail || '요청에 실패했습니다.';
    return Promise.reject(new Error(message));
  }
);

export default instance;

export function setToken(token) {
  localStorage.setItem('access_token', token);
}