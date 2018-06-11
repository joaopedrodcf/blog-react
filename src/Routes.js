import React, { Component } from 'react';
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
  }

  logout(event) {
    event.preventDefault();

    localStorage.removeItem('token');

    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  }

  render() {
    return (
      <Global>
        <Header logout={this.logout} {...this.state} />
        <Main />
        <Footer />
      </Global>
    );
  }
}

export default Routes;
