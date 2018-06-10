import axios from 'axios';

require('dotenv').config();

const api =  axios.create({
  baseURL: process.env.BASE_API_URL
});

api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export default api;