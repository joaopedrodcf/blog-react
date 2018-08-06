import actionTypes from './actionsTypes';

import { loginAxios, registerAxios } from '../utils/';

/*
 * action creators
 */

export function loginError() {
  return {
    type: actionTypes.LOGIN_ERROR
  };
}

export function loginSuccess(email) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: { email }
  };
}

export function loginStart() {
  return {
    type: actionTypes.LOGIN_START
  };
}

export function registerError() {
  return {
    type: actionTypes.REGISTER_ERROR
  };
}

export function registerSuccess(email) {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload: { email }
  };
}

export function registerStart() {
  return {
    type: actionTypes.REGISTER_START
  };
}

export function logoutError() {
  return {
    type: actionTypes.LOGOUT_ERROR
  };
}

export function logoutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

export function logoutStart() {
  return {
    type: actionTypes.LOGOUT_START
  };
}

/*
 * action creators async
 */

export function login(email, password) {
  return dispatch => {
    console.log('login action creators async');
    dispatch(loginStart());

    loginAxios(email, password)
      .then(response => {
        console.log(response);
        dispatch(loginSuccess(email));
      })
      .catch(error => {
        console.log(error);
        dispatch(loginError());
      });
  };
}

export function register(email, password) {
  return dispatch => {
    dispatch(registerStart());

    registerAxios(email, password)
      .then(() => dispatch(registerSuccess(email)))
      .catch(() => dispatch(registerError()));
  };
}

export function logout() {
  return dispatch => {
    dispatch(logoutStart())
      .then(() => dispatch(logoutSuccess()))
      .catch(() => dispatch(logoutError()));
  };
}
