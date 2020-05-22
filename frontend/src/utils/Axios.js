import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.API_URL,
  headers: { 'Content-Type': 'application/json' },
});
if (localStorage.getItem('token')) {
  instance.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
}
export default instance;
