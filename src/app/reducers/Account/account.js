import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
} from '../../constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_REQUEST:
      return Object.assign({}, state, {
        is_pending: true,
        user: null,
        error: null,
      });
    case USER_SUCCESS:
      return Object.assign({}, state, {
        is_pending: false,
        user: action.user,
        error: null,
      });
    case USER_FAILURE:
      return Object.assign({}, state, {
        is_pending: false,
        user: null,
        error: String(action.error),
      });
    default:
      return state;
  }
}
