const dev = {
  API_URL: 'http://127.0.0.1/api/v1',
  IMAGES_PATH: 'http://localhost/img',
};
const prod = {
  API_URL: 'http://127.0.0.1/api/v1',
  IMAGES_PATH: 'http://127.0.0.1/img',
};
const config = process.env.NODE_ENV === 'development' ? dev : prod;
export default { ...config };
