import fetch from 'isomorphic-fetch';
import { FETCH_ITEMS, FETCH_ACCOUNT_DETAILS } from '../constants/actionTypes';

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
      promise: fetch('/api/items', { credentials: 'include' })
                .then(response => (response.ok ? response : Promise.reject(response)))
                .then(response => response.json()),
    },
  };
}

export function fetchAccountDetails() {
  return {
    type: FETCH_ACCOUNT_DETAILS,
    payload: {
      promise: fetch('/account', { credentials: 'include' })
                .then(response => (response.ok ? response : Promise.reject(response)))
                .then(response => response.json()),
    },
  };
}
