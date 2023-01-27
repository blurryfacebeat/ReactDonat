import { HttpClient } from './HttpClient';

export const BaseHttpClient = new HttpClient({
  baseURL: 'https://63d3e646a93a149755b5923c.mockapi.io/api/v1/',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});
