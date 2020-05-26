import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.API_URL,
  headers: { 'Content-Type': 'application/json' },
});
instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response &&
      error.response.status === 401 &&
      !/^\/tour\//.test(window.location.pathname)
    ) {
      window.location = `/auth/login?path=${window.location.pathname}`;
      return false;
    }
    return Promise.reject(error);
  }
);
export default instance;
