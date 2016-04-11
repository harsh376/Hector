import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import App from './containers/App';
import IndexPageContainer from './containers/IndexPageContainer';
import TodoPageContainer from './containers/TodoPageContainer';
import NomatchContainer from './containers/NomatchContainer';
import { setState } from './actions/action_creators';
import configureStore from './store/configureStore';
import rootReducer from './reducers/index';

const addr = process.env.SERVER_ADDR ? process.env.SERVER_ADDR : 'http://localhost:8080';
const socket = io.connect(addr);

const store = configureStore(rootReducer, socket);

socket.on('state', state => {
  store.dispatch(setState(state));
});

const routes = (
  <Route path="/" component={App}>
    <Route path="filter" component={IndexPageContainer} />
    <Route path="todo" component={TodoPageContainer} />
    <Route path="*" component={NomatchContainer} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
