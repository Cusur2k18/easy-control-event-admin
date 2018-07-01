import * as dashboardTypes from './actionTypes';
import { AccountService } from '../../shared/services/api/account.service';

/** 
 *  _______        _                                    _       
 * |__   __|      | |                                  | |      
 *    | | ___   __| | __ _ _   _    _____   _____ _ __ | |_ ___ 
 *    | |/ _ \ / _` |/ _` | | | |  / _ \ \ / / _ \ '_ \| __/ __|
 *    | | (_) | (_| | (_| | |_| | |  __/\ V /  __/ | | | |_\__ \
 *    |_|\___/ \__,_|\__,_|\__, |  \___| \_/ \___|_| |_|\__|___/
 *                          __/ |                               
 *                         |___/                                
*/
const todayEventsStart = () => {
  return {
    type: dashboardTypes.INIT_TODAY_EVENTS
  }
}

const todayEventsSuccess = () => {
  return {
    type: dashboardTypes.TODAY_EVENTS_SUCCESS,
  }
}

const setTodayEvents = (events) => {
  return {
    type: dashboardTypes.SET_TODAY_EVENTS,
    events
  }
}

export const getTodayEvents = () => {
  return dispatch => {
    dispatch(todayEventsStart());

    let userInfo = JSON.parse(localStorage.getItem('user'))

    AccountService.getRecordsByAccountId(userInfo.accountId, 'events')
      .then( res => {
        console.log(res);
        if (res.status === 200) {
          
          dispatch(todayEventsSuccess());
          dispatch(setTodayEvents(res.data));

        } else if (res.status === 401) {
          // Todo: Add a toaster for handling errors
        }
      })
      .catch( err => {
        // Todo: Add a toaster for handling errors
      })


  }
}

/** 
 *  ______ _ _ _                    _   ______               _       
 * |  ____(_) | |                  | | |  ____|             | |      
 * | |__   _| | |_ ___ _ __ ___  __| | | |____   _____ _ __ | |_ ___ 
 * |  __| | | | __/ _ \ '__/ _ \/ _` | |  __\ \ / / _ \ '_ \| __/ __|
 * | |    | | | ||  __/ | |  __/ (_| | | |___\ V /  __/ | | | |_\__ \
 * |_|    |_|_|\__\___|_|  \___|\__,_| |______\_/ \___|_| |_|\__|___/
*/
const filteredEventsStart = () => {
  return {
    type: dashboardTypes.INIT_FILTERED_EVENTS
  }
}

const filteredEventsSuccess = () => {
  return {
    type: dashboardTypes.FILTERED_EVENTS_SUCCES,
  }
}

const setFilteredEvents = (events) => {
  return {
    type: dashboardTypes.SET_FILTERED_EVENTS,
    events
  }
}

export const getFilteredEvents = () => {
  return dispatch => {
    dispatch(filteredEventsStart());

    let userInfo = JSON.parse(localStorage.getItem('user'))

    AccountService.getFilteredEvents(userInfo.accountId)
      .then( res => {
        console.log(res);
        if (res.status === 200) {
          
          dispatch(filteredEventsSuccess());
          dispatch(setFilteredEvents(res.data));

        } else if (res.status === 401) {
          // Todo: Add a toaster for handling errors
        }
      })
      .catch( err => {
        // Todo: Add a toaster for handling errors
      })


  }
}

/** 
 *   _           _            _     ______               _       
 *  | |         | |          | |   |  ____|             | |      
 *  | |     __ _| |_ ___  ___| |_  | |____   _____ _ __ | |_ ___ 
 *  | |    / _` | __/ _ \/ __| __| |  __\ \ / / _ \ '_ \| __/ __|
 *  | |___| (_| | ||  __/\__ \ |_  | |___\ V /  __/ | | | |_\__ \
 *  |______\__,_|\__\___||___/\__| |______\_/ \___|_| |_|\__|___/
*/
const latestEventStart = () => {
  return {
    type: dashboardTypes.INIT_LATEST_EVENTS
  }
}

const latestEventsSuccess = () => {
  return {
    type: dashboardTypes.LATEST_EVENTS_SUCCESS,
  }
}

const setLatestEvents = (events) => {
  return {
    type: dashboardTypes.SET_LATEST_EVENTS,
    events
  }
}

export const getLatestEvents = () => {
  return dispatch => {
    dispatch(latestEventStart());

    let userInfo = JSON.parse(localStorage.getItem('user'))

    AccountService.getLatestEvents(userInfo.accountId, 5)
      .then( res => {
        console.log(res);
        if (res.status === 200) {
          
          dispatch(latestEventsSuccess());
          dispatch(setLatestEvents(res.data));

        } else if (res.status === 401) {
          // Todo: Add a toaster for handling errors
        }
      })
      .catch( err => {
        // Todo: Add a toaster for handling errors
      })


  }
}
