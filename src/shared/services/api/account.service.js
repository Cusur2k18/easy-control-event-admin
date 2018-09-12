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
  static getFilteredEvents(accountId, from, to, count = 20) {
    from = from || moment().startOf('month');
    to = to || moment().endOf('month');
    const filter = JSON.stringify({
      "where": {
        "startDateTime": { "gte": from },
        "endDateTime": { "lte": to }
      },
      "count": count
    })
    return api.get(`${this.baseUrl()}/${accountId}/events?filter=${filter}`)
      .then( response => parseRequest(response) )
      .catch( error => parseRequest(error) );
  }
  /*
   * @description Return all the events for today
   * @static
   * @param {*} accountId
   * @param {*} count
   * @returns Promise
   * @memberof AccountService
   */
  static getTodayEvents(accountId, count = 5) {
    const now = moment().format('YYYY-MM-DD');
    const tomorrow = moment().add(1, 'd').format('YYYY-MM-DD');
    const filter = JSON.stringify({
      "where": {
        "and": [
          {
            "startDateTime": { "gte": now }
          },
          {
            "startDateTime": { "lt": tomorrow }
          }
        ]
      },
      "limit": count
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

  static getEventByUuid(accountId, uuid) {
    const filter = JSON.stringify({
      "where": {"uuid": uuid},
      "include": "students"
    })

    return api.get(`${this.baseUrl()}/${accountId}/events?filter=${filter}`)
      .then( response => parseRequest(response) )
      .catch( error => parseRequest(error) );
  }
}