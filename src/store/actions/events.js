import * as moment from 'moment';
import * as eventsType from './actionTypes';
import { EventsService } from '../../shared/services';

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
