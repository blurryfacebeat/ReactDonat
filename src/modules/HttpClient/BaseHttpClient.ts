import { HttpClient } from './HttpClient';

export const BaseHttpClient = new HttpClient({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});
