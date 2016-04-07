import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import App from './containers/App';
import IndexPageContainer from './containers/IndexPageContainer';
import rootReducer from './reducers/reducer';
import { setState } from './actions/action_creators';
import configureStore from './store/configureStore';

const addr = process.env.SERVER_ADDR ? process.env.SERVER_ADDR : 'http://localhost:8080';
const socket = io.connect(addr);

const store = configureStore(rootReducer, socket);

socket.on('state', state => {
  store.dispatch(setState(state));
});

const routes = (
  <Route component={App}>
    <Route path="/" component={IndexPageContainer} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
