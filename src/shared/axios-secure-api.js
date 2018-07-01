import axios from 'axios';

require('dotenv').config();

const api =  axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
});

api.interceptors.request.use( config => { // Create an interceptor only for get request, since we need to include the token as a query param
  
  // If is a get request, append the access token
  if (config.method === 'get') {

    if (config.url.indexOf('?') >= 0) { // If already have a query params just add one more
      config.url += `&access_token=${localStorage.getItem('token')}`
    } else {
      config.url += `?access_token=${localStorage.getItem('token')}`
    }
  }

  return config
})

export default api;