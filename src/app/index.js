// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory,
} from 'react-router'
import { Provider } from 'react-redux'
import { addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'

// TODO: Uncomment on adding `onEnter` to routes
// import { isLoggedIn } from './auth';
import App from './containers/App/App'
import NoMatchContainer from './containers/NoMatch/NoMatchContainer'
import ProjectsContainer from './containers/Projects/ProjectsContainer'
import Work from './containers/Work/Work'
import ProjectsList from './components/ProjectsList/ProjectsList'
import Capstone from './components/Capstone/Capstone'
import SearchEngine from './components/SearchEngine/SearchEngine'

import configureStore from './redux/configureStore'
import rootReducer from './redux/rootReducer'

import ConnectedIntlProvider from './components/ConnectedIntlProvider/ConnectedIntlProvider'
import translations from './translations/translations.json'

// TODO: Move initialization into separate file
addLocaleData(fr)

const initialState = {
  intl: {
    locale: 'en',
    messages: translations.en,
  },
}

const store = configureStore(rootReducer, initialState)

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
    {/* <Route path="projects" component={ProjectsContainer}>
      <IndexRoute component={ProjectsList} />
      <Route path="capstone" component={Capstone} />
      <Route path="searchEngine" component={SearchEngine} />
    </Route>
    <Route path="work" component={Work} /> */}
    <Redirect from="*" to="/" />
  </Route>
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <Router history={browserHistory}>{routes}</Router>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root'),
)
