import api from '../../axios-api';

export class AuthService {

  static login(credentials, includeUser=true) {
    let url = '/managers/login';

    if (includeUser) {
      url = url + '?include=user'
    }

    return api.post(url, credentials)
      .then( response => response)
      .catch( error => error);
  }
}