import {
  FETCH_USER,
} from '../constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case `${FETCH_USER}_REQUEST`:
      return Object.assign({}, state, {
        is_pending: true,
        user: null,
        error: null,
      });
    case `${FETCH_USER}_SUCCESS`:
      return Object.assign({}, state, {
        is_pending: false,
        user: action.user,
        error: null,
      });
    case `${FETCH_USER}_FAILURE`:
      return Object.assign({}, state, {
        is_pending: false,
        user: null,
        error: String(action.error),
      });
    default:
      return state;
  }
}
