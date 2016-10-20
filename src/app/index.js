import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// TODO: Uncomment on adding `onEnter` to routes
// import { isLoggedIn } from './auth';
import App from './App/App';
import NoMatchContainer from './NoMatch/NoMatchContainer';
import ResumeContainer from './Resume/ResumeContainer';
// import ProjectsContainer from './Projects/ProjectsContainer';

import configureStore from './store/configureStore';
import rootReducer from './reducers/index';

import { addLocaleData } from 'react-intl';
import ConnectedIntlProvider from './ConnectedIntlProvider/ConnectedIntlProvider';
import translations from './translations/translations';
import it from 'react-intl/locale-data/it';

// TODO: Move initialization into separate file
addLocaleData(it);

const initialState = {
  intl: {
    locale: 'en',
    messages: translations.en,
  },
};

const store = configureStore(rootReducer, initialState);

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
    <Route path="*" component={NoMatchContainer} />
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
