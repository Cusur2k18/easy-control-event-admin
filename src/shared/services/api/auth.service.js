import api from '../../axios-api';
import axios from 'axios';
import { parseRequest } from '../../../utils';

export class AuthService {

  static login(credentials, includeUser=true) {
    let url = '/managers/login';

    if (includeUser) {
      url = url + '?include=user'
    }

    return api.post(url, credentials)
      .then( response => parseRequest(response) )
      .catch( error => parseRequest(error) );
  }

  static logout(token) {
    if (token) {
      let url = '/managers/logout';
  
      return axios.post(url, {
        headers: {'Authorization': token}
      })
        .then( response => parseRequest(response) )
        .catch( error => parseRequest(error) );
    }
    return Promise.resolve()
  }
}