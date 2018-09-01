import axios from 'axios';

const endpointLogin = '/api/login';
const endpointRegister = '/api/register';
const urlLogin = process.env.REACT_APP_API_HOST + endpointLogin;
const urlRegister = process.env.REACT_APP_API_HOST + endpointRegister;

export const loginAsync = async (email, password) => {
    axios
        .post(urlLogin, {
            email,
            password
        })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
            return Promise.resolve(response);
        });
};

export const registerAsync = async (email, password) => {
    axios
        .post(urlRegister, {
            email,
            password
        })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
            return Promise.resolve(response);
        });
};

export const logoutAsync = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
};
