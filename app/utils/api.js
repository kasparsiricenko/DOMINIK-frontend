import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7891', // Your backend's base URL
});

export default api;
