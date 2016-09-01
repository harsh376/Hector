import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import remoteActionMiddleware from '../middlewares/remote_action_middleware';

export default function configureStore(rootReducer, socket, initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunk,
      remoteActionMiddleware(socket)
    )
  )(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
}
