import React from 'react';
import Radium from 'radium';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const baseStyle = {
  display: 'grid',
  gridTemplateColumns: '3fr 10fr 3fr',
  gridTemplateRows: '60px 1fr 90px',
  gridTemplateAreas:
    '"header header header" " . main . " "footer footer footer"',
  gridGap: '20px',
  fontFamily: '"Open Sans", sans-serif'
};

const Routes = () => (
  <div style={baseStyle}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Radium(Routes);
