import fetch from 'isomorphic-fetch';

import { FETCH_ITEMS } from '../constants/actionTypes';

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
    payload: {
      promise: fetch('/api/items', { credentials: 'include' })
                .then(response => (response.ok ? response : Promise.reject(response)))
                .then(response => response.json()),
    },
  };
}
