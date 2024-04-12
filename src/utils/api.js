import axios, { HttpStatusCode, isAxiosError } from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000;

export const api = axios.create();

// 요청
api.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    if (isAxiosError(err)) {
      if (err.status === HttpStatusCode.BadRequest) {
        console.error('Bad Request - 400');
      } else if (err.status === HttpStatusCode.NotFound) {
        console.error('Not Found - 404');      
      } else {
        console.error('Request Error: ', err.message);
      }
    } else {
      console.error('axios 외부에서 발생한 에러: ', err.message);
    }
    return Promise.reject(err);
  }
);

// 응답
api.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (isAxiosError(err)) {
      if (err.status === HttpStatusCode.Unauthorized) {
        console.error('Unauthorized - 401');
      } else if (err.status === HttpStatusCode.InternalServerError) {
        console.error('Internal Server Error - 500');
      } else {
        console.error('Response Error: ', err.message);
      }
    } else {
      console.error('axios 외부에서 발생한 에러: ', err.message);
    }
    return Promise.reject(err);
  }
);