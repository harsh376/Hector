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

import { addLocaleData } from 'react-intl';
import ConnectedIntlProvider from './components/ConnectedIntlProvider/ConnectedIntlProvider';
import translations from './translations/translations';
import it from 'react-intl/locale-data/it';

// TODO: Move initialization into separate file
addLocaleData(it);

const addr = process.env.SERVER_ADDR ? process.env.SERVER_ADDR : 'http://localhost:8080';
const socket = io.connect(addr);
const initialState = {
  intl: {
    locale: 'en',
    messages: translations.en,
  },
};

const store = configureStore(rootReducer, socket, initialState);

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
    <ConnectedIntlProvider>
      <Router history={browserHistory}>{routes}</Router>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root')
);
