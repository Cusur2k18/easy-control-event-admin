import * as authActionTypes from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  isLoggingIn: false,
  loginError: null
}

const authReducer = (state=initialState, action) => {

  switch (action.type) {
    case authActionTypes.INIT_LOGIN:
      return {
        ...state,
        isLoggingIn: true
      }

    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.user,
        isLoggingIn: false,
        loginError: null
      }

    case authActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: {},
        isLoggingIn: false,
        loginError: action.error
      }

    case authActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: {},
        isLoggingIn: false,
        loginError: null
      }

    default:
      return state
  }
}

export default authReducer;
