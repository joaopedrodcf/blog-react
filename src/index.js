import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { injectGlobal } from 'styled-components';
import Routes from './Routes';
import reducers from './reducers';

/* eslint-disable no-unused-expressions */
injectGlobal`
    body,
    html,
    #root {
        height: 100%;
    }

    * {
        box-sizing: border-box;
    }

    a,
    a:active, {
        outline: none;
    }

/*
    *:not(path):not(g) {
        color: hsla(210, 100%, 100%, 0.9) !important;
        background: hsla(210, 100%, 50%, 0.5) !important;
        outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
        box-shadow: none !important;
    }
*/
`;

const initialState = {
    reduxIsAuthenticated: !!localStorage.getItem('token'),
    email: localStorage.getItem('email')
};

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Routes />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
