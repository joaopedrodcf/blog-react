import axios from 'axios';

const endpointLogin = '/api/login';
const endpointRegister = '/api/register';
const urlLogin = process.env.REACT_APP_API_HOST + endpointLogin;
const urlRegister = process.env.REACT_APP_API_HOST + endpointRegister;

export const authenticate = (url, email, password) =>
  axios
    .post(url, {
      email,
      password
    })
    .then(response => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', email);
    })
    .catch(() => false);

export const loginAxios = (email, password) => {
  authenticate(urlLogin, email, password);
};

export const registerAxios = (email, password) => {
  authenticate(urlRegister, email, password);
};
