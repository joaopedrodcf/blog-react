import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById('root')
);
