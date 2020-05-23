const dev = {
  API_URL: 'http://127.0.0.1/api/v1',
  IMAGES_PATH: 'http://localhost/img',
};
const prod = {};
const config = process.env.NODE_ENV === 'development' ? dev : prod;
export default { ...config };
