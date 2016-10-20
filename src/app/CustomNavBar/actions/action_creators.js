import { UPDATE_LOCALE } from '../constants/actionTypes';

export function updateLocale(payload) {
  return {
    type: UPDATE_LOCALE,
    payload,
  };
}

