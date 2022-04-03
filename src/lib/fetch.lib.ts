const OCR_BASE_URL = 'https://ocr.memoracar.com';
const OCR_PORT = '20000';
const AUTHKEY = '8bf54562-3000-11eb-adc1-0242ac120002';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('Content-Type', 'multipart/form-data');
headers.append('Authorization', AUTHKEY);

export const OcrRequest = async (method: Method, path: string, data?: any) => {
  try {
    const config = {
      method: method,
      headers,
      body: data,
      timeout: 40000,
    };
    const BASE_URL = `${OCR_BASE_URL}:${OCR_PORT}`;
    const response = await fetch(`${BASE_URL}/${path}`, config);
    return response.json();
  } catch (error: any) {
    console.error('Error🚨', error);
    throw Error(error);
  }
};
