const dev = {
  API_URL: 'http://127.0.0.1/api/v1',
  IMAGES_PATH: 'http://192.168.1.2/img',
};
const prod = {};
const config = process.env.NODE_ENV === 'development' ? dev : prod;
export default { ...config };
