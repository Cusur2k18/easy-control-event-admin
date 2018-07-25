import * as moment from 'moment';
import * as eventsType from './actionTypes';
import { EventsService, AccountService } from '../../shared/services';



// INDEX EVENTS ACTIONS
const getEventsStart = (name) => {
  return {
    type: eventsType.INIT_EVENTS
  }
}

const getEventsSuccess = (events) => {
  return {
    type: eventsType.EVENTS_SUCCESS,
    events
  }
}

export const getEvents = (from, to) => {
  return dispatch => {
    dispatch(getEventsStart())

    let userInfo = JSON.parse(localStorage.getItem('user'))

    AccountService.getFilteredEvents(userInfo.accountId, from, to)
      .then( res => {
        console.log(res);

        if (res.status === 200) {
          dispatch(getEventsSuccess(res.data));
        // Success call

        } else if (res.status === 401) {
          // Todo: Add a toaster for handling errors
        }
      })
  }
}

// UPSERT EVENT ACTIONS

const eventSaveStart = (name) => {
  return {
    type: eventsType.INIT_UPSERT_EVENT
  }
}

const eventSaveSuccess = () => {
  return {
    type: eventsType.UPSERT_EVENT_SUCCESS
  }
}

const eventSaveError = (error) => {
  return {
    type: eventsType.UPSERT_EVENT_FAIL,
    error
  }
}


export const saveEvent = (event) => {
  return dispatch => {
    dispatch(eventSaveStart());


    EventsService.save(event)
      .then( res => {
        console.log(res);
        dispatch(eventSaveSuccess());
      })


  }
}

export const restartForm = () => {
  return {
    type: eventsType.RESTART_EVENT_FORM
  }
}
