import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import remoteActionMiddleware from '../middleware/remoteActionMiddleware';

export default function configureStore(rootReducer, initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunk,
      remoteActionMiddleware,
    ),
  )(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
}
