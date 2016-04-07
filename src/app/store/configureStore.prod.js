import { compose, createStore, applyMiddleware } from 'redux';
import remoteActionMiddleware from '../middlewares/remote_action_middleware';

export default function configureStore(rootReducer, socket, initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      remoteActionMiddleware(socket)
    )
  )(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
}
