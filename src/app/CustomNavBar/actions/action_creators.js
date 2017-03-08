import UPDATE_LOCALE from '../constants/actionTypes';

export default function updateLocale(payload) {
  return {
    type: UPDATE_LOCALE,
    payload,
  };
}

