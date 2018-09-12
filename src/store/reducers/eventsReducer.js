import * as eventsActionsTypes from '../actions/actionTypes';

const initialState = {
  events: null,
  singleEvent: null,
  error: null,
  loading: {
    index: false,
    form: false,
    details: false
  },
  successUpsert: false
}

const eventsReducer = (state=initialState, action) => {

  switch (action.type) {

    // Event Detail
    case eventsActionsTypes.INIT_EVENT_DETAIL:
      return {
        ...state,
        error: null,
        singleEvent: {},
        loading: {
          ...state.loading,
          details: true
        }
      }
    case eventsActionsTypes.EVENT_DETAIL_SUCCESS:
      return {
        ...state,
        error: null,
        singleEvent: action.event,
        loading: {
          ...state.loading,
          details: false
        }
      }
    case eventsActionsTypes.EVENT_DETAIL_FAIL:
      return {
        ...state,
        error: action.error,
        singleEvent: {},
        loading: {
          ...state.loading,
          details: false
        }
      }

    // Today events
    case eventsActionsTypes.INIT_EVENTS:
      return {
        ...state,
        events: [],
        loading: {
          ...state.loading,
          index: true
        }
      }

    case eventsActionsTypes.EVENTS_SUCCESS:
      return {
        ...state,
        error: null,
        events: action.events,
        loading: {
          ...state.loading,
          index: false
        }
      }

    case eventsActionsTypes.EVENTS_FAIL:
      return {
        ...state,
        error: action.error,
        events: [],
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
        },
        successUpsert: true
      }

    case eventsActionsTypes.UPSERT_EVENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: {
          ...state.loading,
          form: false
        },
        successUpsert: false
      }
    case eventsActionsTypes.RESTART_EVENT_FORM:
      return {
        ...state,
        error: null,
        loading: {
          index: false,
          form: false
        },
        successUpsert: false
      }

    default:
      return state
  }
}

export default eventsReducer;
