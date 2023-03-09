import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://projet-08-allint-back-production.up.railway.app',
});

export default axiosInstance;
