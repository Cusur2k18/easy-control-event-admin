import * as authActionTypes from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  isLoggingIn: false
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
        ...this.state,
        isLoggedIn: true,
        currentUser: action.user,
        isLoggingIn: false
      }
  
    default:
      return state
  }
}

export default authReducer;