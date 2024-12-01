import axios from 'axios';
import Axios, { AxiosInstance } from 'axios';

axios.defaults.withCredentials = true;

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  withXSRFToken: true
});

export const httpClient: AxiosInstance = axiosInstance
