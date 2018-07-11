import * as eventsActionsTypes from '../actions/actionTypes';

const initialState = {
  events: null,
  error: null,
  loading: {
    index: false,
    form: false
  }
}

const eventsReducer = (state=initialState, action) => {

  switch (action.type) {

    // Today events
    case eventsActionsTypes.INIT_EVENTS:
      return {
        ...state,
        loading: {
          ...state.loading,
          index: true
        }
      }

    case eventsActionsTypes.EVENTS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: {
          ...state.loading,
          index: false
        }
      }

    case eventsActionsTypes.EVENTS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: {
          ...state.loading,
          index: false
        }
      }

    case eventsActionsTypes.INIT_UPSERT_EVENT:
      return {
        ...state,
        loading: {
          ...state.loading,
          form: true
        }
      }

    case eventsActionsTypes.UPSERT_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: {
          ...state.loading,
          form: false
        }
      }

    case eventsActionsTypes.UPSERT_EVENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: {
          ...state.loading,
          form: false
        }
      }

    default:
      return state
  }
}

export default eventsReducer;