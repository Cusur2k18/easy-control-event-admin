import api from '../../axios-api';
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
}