import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import Routes from './Routes';
import reducers from './reducers';

const initialState = {
    reduxIsAuthenticated: !!localStorage.getItem('token'),
    email: localStorage.getItem('email')
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunkMiddleware, logger)
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
