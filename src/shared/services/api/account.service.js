import api from '../../axios-secure-api';
import { parseRequest } from '../../../utils';
import { BaseApiService } from './base.api.service';
import * as moment from 'moment';

export class AccountService extends BaseApiService {

  /**
   * @description Return the base url for the Account Service: '/account'
   * @static
   * @returns
   * @memberof AccountService
   */
  static baseUrl () {
    return '/accounts'
  }
 
  /**
   * @description Return all the events within a data range ( from - to )
   * @static
   * @param {*} accountId
   * @param {*} from
   * @param {*} to
   * @returns
   * @memberof AccountService
   */
  static getFilteredEvents(accountId, from, to) {
    from = from || moment().startOf('month');
    to = to || moment().endOf('month');
    const filter = JSON.stringify({
      "where": {
        "startDateTime": { "gt": from },
        "endDateTime": { "lt": to }
      }
    })
    return api.get(`${this.baseUrl()}/${accountId}/events?filter=${filter}`)
      .then( response => parseRequest(response) )
      .catch( error => parseRequest(error) );
  }

  /**
   * @description Return by default the latest 5 events created or can specify a count
   * @static
   * @param {*} accountId
   * @param {number} [count=5]
   * @returns
   * @memberof AccountService
   */
  static getLatestEvents(accountId, count = 5) {
    const filter = JSON.stringify({
      "order": "createdAt DESC",
      "limit": count
    })
    return api.get(`${this.baseUrl()}/${accountId}/events?filter=${filter}`)
      .then( response => parseRequest(response) )
      .catch( error => parseRequest(error) );
  }
}