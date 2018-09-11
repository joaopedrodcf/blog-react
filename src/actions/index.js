import axios from 'axios';
import actionTypes from './actionsTypes';

const endpointLogin = '/api/login';
const endpointRegister = '/api/register';
const urlLogin = process.env.REACT_APP_API_HOST + endpointLogin;
const urlRegister = process.env.REACT_APP_API_HOST + endpointRegister;
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
        dispatch(loginStart());

        axios
            .post(urlLogin, {
                email,
                password
            })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);

                dispatch(loginSuccess(email));
            })
            .catch(() => {
                dispatch(loginError());
            });
    };
}

export function register(email, password) {
    return dispatch => {
        dispatch(registerStart());

        axios
            .post(urlRegister, {
                email,
                password
            })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);

                dispatch(registerSuccess(email));
            })
            .catch(() => dispatch(registerError(email)));
    };
}

export function logout() {
    return dispatch => {
        dispatch(logoutStart());

        localStorage.removeItem('token');
        localStorage.removeItem('email');

        dispatch(logoutSuccess());
    };
}
