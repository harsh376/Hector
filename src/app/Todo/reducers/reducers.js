import { List, Map } from 'immutable';
import { FETCH_ITEMS } from '../constants/actionTypes';

export default function (state = new Map(), action) {
  switch (action.type) {
    case `${FETCH_ITEMS}_PENDING`:
      return state.set('isFetching', true);
    case `${FETCH_ITEMS}_FULFILLED`:
      return state.set('isFetching', false)
                  .set('data', new List(action.payload));
    case `${FETCH_ITEMS}_REJECTED`:
      return state.set('isFetching', false)
                  .set('error', action.payload);
    default:
      return state;
  }
}
