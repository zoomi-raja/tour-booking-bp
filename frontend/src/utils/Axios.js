import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://127.0.0.1/api/v1',
  headers: { 'Content-Type': 'application/json' },
});
if (localStorage.getItem('token')) {
  instance.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
}
export default instance;
