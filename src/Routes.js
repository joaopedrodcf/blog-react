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
      isAuthenticated: !!localStorage.getItem('token')
    };

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);

    this.endpointLogin = '/api/login';
    this.urlLogin = process.env.REACT_APP_API_HOST + this.endpointLogin;

    this.endpointRegister = '/api/register';
    this.urlRegister = process.env.REACT_APP_API_HOST + this.endpointRegister;
  }

  logout(event) {
    event.preventDefault();

    localStorage.removeItem('token');

    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  }

  // returning the promise
  login(email, password) {
    return axios
      .post(this.urlLogin, {
        email,
        password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
        return true;
      })
      .catch(() => false);
  }

  register(email, password) {
    return axios
      .post(this.urlRegister, {
        email,
        password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
        return true;
      })
      .catch(() => false);
  }

  render() {
    return (
      <Global>
        <Header logout={this.logout} {...this.state} />
        <Main login={this.login} register={this.register} />
        <Footer />
      </Global>
    );
  }
}

export default Routes;
