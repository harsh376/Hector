import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import { isLoggedIn } from './auth';
import App from './containers/App';
import TodoPageContainer from './containers/TodoPageContainer';
import FilterPageContainer from './containers/FilterPageContainer';
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

function requireAuth(nextState, replace, cb) {
  isLoggedIn()
    .then(
      () => cb(),
      () => {
        replace({
          pathname: '/',
          state: { nextPathname: nextState.location.pathname },
        });
        cb();
      });
}

const routes = (
  <Route path="/" component={App}>
    <Route path="todo" component={TodoPageContainer} onEnter={requireAuth} />
    <Route path="filter" component={FilterPageContainer} onEnter={requireAuth} />
    <Route path="*" component={NomatchContainer} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
