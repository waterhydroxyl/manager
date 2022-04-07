// import CHHRequest from './network';
// // import { BASE_URL, TIME_OUT } from "./config"
// import localCache from '@/utils/cache';
import axios from 'axios';

const myRequest = axios.create({
  baseURL: '/api',
});
myRequest.interceptors.response.use((response) => {
  return response.data;
});

export { myRequest };
