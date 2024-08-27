import axios, { AxiosError } from 'axios';
import { Token } from '@/constants/token';

const baseURL = '' as const; // set your api overhere or you can use .env (https://vitejs.dev/guide/env-and-mode#env-files)

export const httpClient = axios.create({
  baseURL,
});

export const httpClientWithToken = axios.create({
  baseURL,
  headers: {
    Authorization: Token.getToken() ? `Bearer ${Token.getToken()}` : undefined,
  },
});

httpClientWithToken.interceptors.request.use((request) => {
  const token = Token.getToken();
  const Authorization = token ? `Bearer ${token}` : undefined;
  request.headers.Authorization = Authorization;
  return request;
});

httpClientWithToken.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      //place your reentry code
    }
    return Promise.reject(error);
  },
);
