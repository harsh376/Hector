import { compose, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import remoteActionMiddleware from '../middlewares/remote_action_middleware';

export default function configureStore(rootReducer, socket, initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      promiseMiddleware(),
      remoteActionMiddleware(socket)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
}