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
  }

  logout(event) {
    event.preventDefault();

    localStorage.removeItem('token');

    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  }

  // returning the promise
  login(email, password) {
    return axios
      .post('http://localhost:8000/api/login', {
        email,
        password
      })
      .then(response => {
        console.log('response');
        console.log(response);
        localStorage.setItem('token', response.data.token);
        this.setState({ isAuthenticated: true });
        return true;
      })
      .catch(error => {
        console.log('error');
        console.log(error);
        return false;
      });
  }

  register(email, password) {
    return axios
      .post('http://localhost:8000/api/register', {
        email,
        password
      })
      .then(response => {
        console.log('response');
        console.log(response);
        localStorage.setItem('token', response.data.token);
        this.setState({ isAuthenticated: true });
        return true;
      })
      .catch(error => {
        console.log('error');
        console.log(error);
        return false;
      });
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
