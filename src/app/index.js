import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

// TODO: Uncomment on adding `onEnter` to routes
// import { isLoggedIn } from './auth';
import App from './containers/App';
import NomatchContainer from './containers/NomatchContainer';
import ResumeContainer from './Resume/ResumeContainer';
// import ProjectsContainer from './Projects/ProjectsContainer';

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

// TODO: Uncomment on adding `onEnter` to routes
// function requireAuth(nextState, replace, cb) {
//   isLoggedIn()
//     .then(
//       () => cb(),
//       () => {
//         replace({
//           pathname: '/',
//           state: { nextPathname: nextState.location.pathname },
//         });
//         cb();
//       });
// }

// TODO: Add `onEnter={requireAuth}` later
// Right now we authenticate only when `Auth` component
// is mounted (i.e on refresh), and not when the route changes
const routes = (
  <Route path="/" component={App}>
    <Route path="resume" component={ResumeContainer} />
{/*    <Route path="projects" component={ProjectsContainer} />*/}
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
