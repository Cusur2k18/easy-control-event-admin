import * as authTypes from './actionTypes';
import { AuthService } from '../../shared/services';

export const loginStart = (name) => {
  return {
    type: authTypes.INIT_LOGIN
  }
}

export const loginSuccess = (data) => {
  return {
    type: authTypes.LOGIN_SUCCESS,
    user: data
  }
}

export const loginFail = (error) => {
  return {
    type: authTypes.LOGIN_FAIL,
    error
  }
}


export const login = (username, password, includeUser=true) => {
  return dispatch => {
    dispatch(loginStart());

    const credentials = {
      username,
      password
    }

    AuthService.login(credentials, includeUser)
      .then( res => {
        if (res.status === 200) {

          localStorage.setItem('token', res.data.id);
          dispatch(loginSuccess(res.data.user));
        } else {

          dispatch(loginFail('Usuario y contraseña no validos!'));
        }
      })
      .catch( err => {

        dispatch(loginFail('Usuario y contraseña no validos!'));
      })


  }
}


export const logout = () => {
  return {
    type: authTypes.LOGOUT_SUCCESS
  }
}