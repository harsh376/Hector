import { Map } from 'immutable';
import { FETCH_ACCOUNT_DETAILS } from '../../constants/actionTypes';

// TODO: Write tests for reducer

export default function (state = new Map(), action) {
  switch (action.type) {
    case `${FETCH_ACCOUNT_DETAILS}_PENDING`:
      return state.set('is_pending', true);
    case `${FETCH_ACCOUNT_DETAILS}_FULFILLED`:
      return state.set('is_pending', false)
                  .set('user', action.payload);
    case `${FETCH_ACCOUNT_DETAILS}_REJECTED`:
      return state.set('is_pending', false)
                  .set('user', null);
    default:
      return state;
  }
}