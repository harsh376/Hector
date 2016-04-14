import fetch from 'isomorphic-fetch';
import { FETCH_ITEMS } from '../constants/actionTypes';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state,
  };
}

export function filterEntries(input) {
  return {
    meta: { remote: true },
    type: 'FILTER_ENTRIES',
    input,
  };
}

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
    payload: {
      promise: fetch('/api/items')
                .then(response => (response.ok ? response : Promise.reject(response)))
                .then(response => response.json()),
    },
  };
}
