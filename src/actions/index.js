import { loginAxios, registerAxios } from '../utils/';

/*
 * action types
 */

export const LOGIN = 'LOGIN';
export const LOGINSUCCESS = 'LOGINSUCCESS';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';

/*
 * action creators
 */

export function login(email, password) {
  const request = loginAxios(email, password);

  return { type: LOGIN, payload: request };
}

export function register(email, password) {
  const request = registerAxios(email, password);

  return { type: REGISTER, payload: request };
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('email');

  return { type: LOGOUT };
}
