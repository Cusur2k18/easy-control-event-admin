import api from '../../axios-secure-api';
import { parseRequest } from '../../../utils';

export class EventsService {
  static url = '/events';

  static save = (event) => {
    return api.post(EventsService.url, event)
      .then( response => parseRequest(response) )
      .catch( error => parseRequest(error) );
  }
}