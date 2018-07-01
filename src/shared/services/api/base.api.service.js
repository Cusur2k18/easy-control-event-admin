import api from '../../axios-secure-api';
import { parseRequest } from '../../../utils';

export class BaseApiService {

  /**
   * @description Implement this on children only
   * @static
   * @memberof BaseApiService
   */
  static baseUrl() {
    throw new Error('Implement baseUrl on the children class');
  }

 
  /**
   *
   * @description Returns all the given records (collectionName) from the given account (accountId)
   * @todo Implement counting so we dont end up slowing everything
   * @static
   * @param {*} accountId
   * @param {*} collectionName
   * @returns
   * @memberof BaseApiService
   */
  static getRecordsByAccountId(accountId, collectionName) {
    return api.get(`${this.baseUrl()}/${accountId}/${collectionName}`)
      .then( response => parseRequest(response) )
      .catch( error => parseRequest(error) );
  }
}