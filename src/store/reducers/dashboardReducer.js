import * as dashboardActionTypes from '../actions/actionTypes';

const initialState = {
  todayEvents: null,
  filteredEvents: null,
  latestEvents: null,
  dashboardError: null,
  loading: {
    today: false,
    filtered: false,
    latest: false
  }
}

const dashboardReducer = (state=initialState, action) => {

  switch (action.type) {

    // Today events
    case dashboardActionTypes.INIT_TODAY_EVENTS:
      return {
        ...state,
        loading: {
          ...state.loading,
          today: true,
        }
      }

    case dashboardActionTypes.TODAY_EVENTS_SUCCESS:
      return {
        ...state,
        dashboardError: null,
        loading: {
          ...state.loading,
          today: false,
        }
      }

    case dashboardActionTypes.TODAY_EVENTS_FAIL:
      return {
        ...state,
        dashboardError: action.error,
        loading: {
          ...state.loading,
          today: false,
        }
      }

    case dashboardActionTypes.SET_TODAY_EVENTS:
      return {
        ...state,
        todayEvents: action.events,
        loading: {
          ...state.loading
        }
      }


    // Filtered events
    case dashboardActionTypes.INIT_FILTERED_EVENTS:
      return {
        ...state,
        loading: {
          ...state.loading,
          filtered: true,
        }
      }

    case dashboardActionTypes.FILTERED_EVENTS_SUCCES:
      return {
        ...state,
        dashboardError: null,
        loading: {
          ...state.loading,
          filtered: false,
        }
      }

    case dashboardActionTypes.FILTERED_EVENTS_FAIL:
      return {
        ...state,
        dashboardError: action.error,
        loading: {
          ...state.loading,
          filtered: false,
        }
      }

    case dashboardActionTypes.SET_FILTERED_EVENTS:
      return {
        ...state,
        filteredEvents: action.events,
        loading: {
          ...state.loading
        }
      }

    // Latest events
    case dashboardActionTypes.INIT_LATEST_EVENTS:
      return {
        ...state,
        loading: {
          ...state.loading,
          latest: true,
        }
      }

    case dashboardActionTypes.LATEST_EVENTS_SUCCESS:
      return {
        ...state,
        dashboardError: null,
        loading: {
          ...state.loading,
          latest: false,
        }
      }

    case dashboardActionTypes.LATEST_EVENTS_FAIL:
      return {
        ...state,
        dashboardError: action.error,
        loading: {
          ...state.loading,
          latest: false,
        }
      }

    case dashboardActionTypes.SET_LATEST_EVENTS:
      return {
        ...state,
        latestEvents: action.events,
        loading: {
          ...state.loading
        }
      }

    default:
      return state
  }
}

export default dashboardReducer;
