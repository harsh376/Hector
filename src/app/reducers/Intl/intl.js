import { UPDATE_LOCALE } from '../../constants/actionTypes';

function updateLocale(state, newState) {
  return { ...state, ...newState };
}

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_LOCALE:
      return updateLocale(state, action.payload);
    default:
      return state;
  }
}
