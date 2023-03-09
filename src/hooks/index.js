import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://repo-back2-production.up.railway.app',
});

export default axiosInstance;
