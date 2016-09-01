import fetch from 'isomorphic-fetch';

import { FETCH_ITEMS } from '../constants/actionTypes';

function fetchItemsSuccess(items) {
  return {
    type: `${FETCH_ITEMS}_SUCCESS`,
    items,
  };
}

function fetchItemsFailure(error) {
  return {
    type: `${FETCH_ITEMS}_FAILURE`,
    error,
  };
}

export function fetchItems() {
  return function getItems(dispatch) {
    dispatch({ type: `${FETCH_ITEMS}_REQUEST` });

    return fetch('/api/items', { credentials: 'include' })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      }
    )
    .then(items => dispatch(fetchItemsSuccess(items)))
    .catch(e => dispatch(fetchItemsFailure(e)));
  };
}
