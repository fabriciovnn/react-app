import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:8081',
});

export default apiService;

export interface ResponseAPI<T> {
  code: number;
  ok: boolean;
  message: string;
  data?: T;
}
