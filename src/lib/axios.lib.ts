import axios from 'axios';

const BASE_URL = 'https://app.memoracar.com';
const PORT = 16000;

const axiosClient = axios.create({
  baseURL: `${BASE_URL}:${PORT}/`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axiosClient;
