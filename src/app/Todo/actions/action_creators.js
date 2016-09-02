import fetch from 'isomorphic-fetch';

import {
  FETCH_ITEMS,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
} from '../constants/actionTypes';

/*
 *****************
 * FETCH_ITEMS
 *****************
 */

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

/*
 ******************
 * DELETE_ITEM
 ******************
 */

function deleteItemRequest(itemId) {
  return {
    type: `${DELETE_ITEM}_REQUEST`,
    itemId,
  };
}

function deleteItemSuccess(itemId) {
  return {
    type: `${DELETE_ITEM}_SUCCESS`,
    itemId,
  };
}

function deleteItemFailure(itemId, error) {
  return {
    type: `${DELETE_ITEM}_FAILURE`,
    itemId,
    error,
  };
}

export function deleteItem(id) {
  return function delItem(dispatch) {
    dispatch(deleteItemRequest(id));

    return fetch(`/api/items/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      }
    )
    .then(item => dispatch(deleteItemSuccess(item.id)))
    .catch(e => dispatch(deleteItemFailure(id, e)));
  };
}

/*
 ****************
 * ADD_ITEM
 ****************
 */

function addItemRequest(itemName) {
  return {
    type: `${ADD_ITEM}_REQUEST`,
    itemName,
  };
}

function addItemSuccess(item) {
  return {
    type: `${ADD_ITEM}_SUCCESS`,
    item,
  };
}

function addItemFailure(error) {
  return {
    type: `${ADD_ITEM}_FAILURE`,
    error,
  };
}

export function addItem(itemName) {
  return function aItem(dispatch) {
    dispatch(addItemRequest(itemName));

    return fetch('/api/items', {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        name: itemName,
      }),
    })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      }
    )
    .then(item => dispatch(addItemSuccess(item)))
    .catch(e => dispatch(addItemFailure(e)));
  };
}

/*
 ***************
 * UPDATE_ITEM
 ***************
 */

function updateItemRequest(itemId) {
  return {
    type: `${UPDATE_ITEM}_REQUEST`,
    itemId,
  };
}

function updateItemSuccess(item) {
  return {
    type: `${UPDATE_ITEM}_SUCCESS`,
    item,
  };
}

function updateItemFailure(itemId, error) {
  return {
    type: `${UPDATE_ITEM}_FAILURE`,
    itemId,
    error,
  };
}

export function updateItem(id, value) {
  return function uItem(dispatch) {
    dispatch(updateItemRequest(id));

    return fetch(`/api/items/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        name: value,
      }),
    })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      }
    )
    .then(item => dispatch(updateItemSuccess(item)))
    .catch(e => dispatch(updateItemFailure(id, e)));
  };
}

