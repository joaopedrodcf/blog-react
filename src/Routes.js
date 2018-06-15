import React, { Component } from 'react';
import axios from 'axios';

import Global from './style';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: !!localStorage.getItem('token') // Boolean evaluation
    };

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.authenticate = this.authenticate.bind(this);

    this.endpointLogin = '/api/login';
    this.urlLogin = process.env.REACT_APP_API_HOST + this.endpointLogin;

    this.endpointRegister = '/api/register';
    this.urlRegister = process.env.REACT_APP_API_HOST + this.endpointRegister;
  }

  logout(event) {
    event.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('email');

    this.setState({ isAuthenticated: !!localStorage.getItem('token') });
  }

  // returning the promise
  login(email, password) {
    return this.authenticate(this.urlLogin, email, password);
  }

  register(email, password) {
    return this.authenticate(this.urlRegister, email, password);
  }

  authenticate(url, email, password) {
    return axios
      .post(url, {
        email,
        password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email);
        this.setState({ isAuthenticated: !!localStorage.getItem('token') });
        return true;
      })
      .catch(() => false);
  }

  render() {
    return (
      <Global>
        <Header logout={this.logout} {...this.state} />
        <Main login={this.login} register={this.register} {...this.state} />
        <Footer />
      </Global>
    );
  }
}

export default Routes;
