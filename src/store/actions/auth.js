import * as moment from 'moment';
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
      password,
      ttl: 86400 // token valid up to 1 day.
    }

    AuthService.login(credentials, includeUser)
      .then( res => {
        console.log(res);
        if (res.status === 200) {
          const userData = {
            id: res.data.user.id,
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            mLastName: res.data.user.mLastName,
          }

          localStorage.setItem('token', res.data.id);
          localStorage.setItem('expiration', res.data.ttl);  // this value is in seconds
          localStorage.setItem('user', JSON.stringify(userData));
          dispatch(loginSuccess(res.data.user));
        } else if (res.status === 401) {

          dispatch(loginFail('Usuario o contraseña no validos!'));
        }
      })
      .catch( err => {

        dispatch(loginFail('Problemas con tu incio sesion! Contacta a un administrador'));
      })


  }
}

export const autoSignIn = () => {
  return dispatch => {

    if (!localStorage.getItem('token')) {
      dispatch(logout());
    } else {
      const expirationDate = moment().add(localStorage.getItem('expiration'), 's');

      if (expirationDate > moment()) {
        const userData = JSON.parse(localStorage.getItem('user'));

        dispatch(loginSuccess(userData))
      } else {

        dispatch(logout());
      }
    }
  }
}


export const logout = () => {
  return {
    type: authTypes.LOGOUT_SUCCESS
  }
}