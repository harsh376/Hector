import UPDATE_LOCALE from './constants';

export default function updateLocale(payload) {
  return {
    type: UPDATE_LOCALE,
    payload,
  };
}

