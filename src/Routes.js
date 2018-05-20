import React from 'react';
import Global from './style';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const Routes = () => (
  <Global>
    <Header />
    <Main />
    <Footer />
  </Global>
);

export default Routes;
