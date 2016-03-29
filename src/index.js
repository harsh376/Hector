import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { List } from 'immutable';
import io from 'socket.io-client';

import App from './containers/App';
import IndexPage from './containers/IndexPage';
import reducer from './reducers/reducer';
import { setState } from './actions/action_creators';
import remoteActionMiddleware from './middlewares/remote_action_middleware';

const addr = process.env.SERVER_ADDR ? process.env.SERVER_ADDR : 'http://localhost:8080';
const socket = io.connect(addr);

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

socket.on('state', state => {
    store.dispatch(setState(state));
});

const routes = (
    <Route component={App}>
        <Route path="/" component={IndexPage} />
    </Route>
);

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('root')
);
