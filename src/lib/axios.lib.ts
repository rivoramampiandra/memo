import axios, {AxiosRequestConfig} from 'axios';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';

const BASE_URL = 'https://app.memoracar.com';
const PORT = 16000;
const OCR_BASE_URL = 'https://ocr.memoracar.com';
const OCR_PORT = '20000';
const AUTHKEY = '8bf54562-3000-11eb-adc1-0242ac120002';

const axiosClient = axios.create({
  baseURL: `${BASE_URL}:${PORT}/`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = await AsyncStorageUtils.getToken();
    if (token) {
      config.headers!.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosClient;

export const axiosOCRClient = axios.create({
  baseURL: `${OCR_BASE_URL}:${OCR_PORT}/`,
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    Authorization: AUTHKEY,
    'Content-type': 'multipart/form-data',
  },
});
