import axios, {AxiosRequestConfig} from 'axios';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';

const BASE_URL = 'https://app.memoracar.com';
const PORT = 16000;
const OCR_BASE_URL = 'https://ocr.memoracar.com';
const OCR_PORT = '20000';
const AUTHKEY = '8bf54562-3000-11eb-adc1-0242ac120002';

//admin credential
const ADMIN_EMAIL = 'admin@hotmail.fr';
const ADMIN_PASSWORD = 'admin';

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

export const apiOCR = axios.create({
  baseURL: `${OCR_BASE_URL}:${OCR_PORT}/`,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});

apiOCR.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers!.Authorization = AUTHKEY;
    config.headers!['Content-Type'] = 'multipart/form-data';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiOCR.interceptors.request.use(request => {
  console.log(
    '🚀🚀🚀🚀🚀🚀 Starting Request 🚀🚀🚀🚀🚀\n',
    JSON.stringify(request, null, 2),
  );
  return request;
});

apiOCR.interceptors.response.use(response => {
  console.log(
    ' 📡📡📡📡📡 getting Response 📡\n',
    JSON.stringify(response, null, 2),
  );
  return response;
});
