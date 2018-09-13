import axios from 'axios';

const endpointLogin = '/api/login';
const endpointRegister = '/api/register';
const urlLogin = process.env.REACT_APP_API_HOST + endpointLogin;
const urlRegister = process.env.REACT_APP_API_HOST + endpointRegister;

export function loginService(email, password) {
    return axios
        .post(urlLogin, {
            email,
            password
        })
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
        });
}

export function registerService(email, password) {
    return axios
        .post(urlRegister, {
            email,
            password
        })
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
        });
}

export function logoutService() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
}
