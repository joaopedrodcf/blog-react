import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

const initialState = {
  reduxIsAuthenticated: !!localStorage.getItem('token'),
  email: ''
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
