import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import Routes from './Routes';
import reducers from './reducers';
import './globalStyle';

const initialState = {
    reduxIsAuthenticated: !!localStorage.getItem('token'),
    email: localStorage.getItem('email')
};

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Routes />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
