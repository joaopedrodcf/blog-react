import axios from 'axios';

const endpointLogin = '/api/login';
const endpointRegister = '/api/register';
const urlLogin = process.env.REACT_APP_API_HOST + endpointLogin;
const urlRegister = process.env.REACT_APP_API_HOST + endpointRegister;

export const loginAxios = async (email, password) => {
  axios
    .post(urlLogin, {
      email,
      password
    })
    .then(response => Promise.resolve(response));
};

export const registerAxios = async (email, password) => {
  axios
    .post(urlRegister, {
      email,
      password
    })
    .then(response => Promise.resolve(response));
};
