import { List, Map } from 'immutable';
import { AUTHENTICATE_USER } from '../../constants/actionTypes';

export default function (state = new Map(), action) {
  switch (action.type) {
    case `${AUTHENTICATE_USER}_PENDING`:
      return state.set('is_authenticating', true);
    case `${AUTHENTICATE_USER}_FULFILLED`:
      console.log(action.payload);
      return state.set('is_authenticating', false)
                  .set('data', action.payload);
    case `${AUTHENTICATE_USER}_REJECTED`:
      return state.set('is_authenticating', false)
                  .set('error', action.payload);
    default:
      return state;
  }
}
