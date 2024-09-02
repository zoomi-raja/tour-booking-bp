const dev = {
  API_URL: 'http://127.0.0.1/api/v1',
  IMAGES_PATH: 'http://localhost/img',
};
const prod = {
  API_URL: '/api/v1',
  IMAGES_PATH: '/img',
};
const config = process.env.NODE_ENV === 'development' ? dev : prod;
const environmentConfig = { ...config };
export default environmentConfig;
