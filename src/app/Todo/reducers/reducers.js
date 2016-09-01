import { FETCH_ITEMS } from '../constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case `${FETCH_ITEMS}_REQUEST`:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case `${FETCH_ITEMS}_SUCCESS`:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.items,
        error: null,
      });
    case `${FETCH_ITEMS}_FAILURE`:
      return Object.assign({}, state, {
        isFetching: false,
        error: String(action.error),
      });
    default:
      return state;
  }
}
