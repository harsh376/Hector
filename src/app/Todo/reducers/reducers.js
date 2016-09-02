import {
  FETCH_ITEMS,
  DELETE_ITEM,
  ADD_ITEM,
} from '../constants/actionTypes';

function removeFromList(list, itemId) {
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i].id === itemId) {
      list.splice(i, 1);
    }
  }
  // returns a copy
  return list.slice(0);
}

function addToList(list, item) {
  let itemAdded = false;
  for (let i = 0; i < list.length && !itemAdded; i++) {
    if (list[i].order >= item.order) {
      list.splice(i, 0, item);
      itemAdded = true;
    }
  }

  if (!itemAdded) {
    list.push(item);
  }

  // returns a copy
  return list.slice(0);
}

function fetchItemRequest(state) {
  const newState = Object.assign({}, state, {
    isFetching: true,
    error: null,
  });
  delete newState.deleteItem;
  return newState;
}

function deleteItemRequest(state, itemId) {
  const newState = Object.assign({}, state, {
    error: null,
    isDeleting: true,
    deleteItem: itemId,
  });
  return newState;
}

function deleteItemSuccess(state, itemId) {
  const items = state.data;
  const newState = Object.assign({}, state, {
    error: null,
    isDeleting: false,
    deleteItem: itemId,
    data: removeFromList(items, itemId),
  });
  return newState;
}

function deleteItemFailure(state, itemId, error) {
  const newState = Object.assign({}, state, {
    error: String(error),
    isDeleting: false,
    deleteItem: itemId,
  });
  return newState;
}

function addItemRequest(state) {
  const newState = Object.assign({}, state, {
    error: null,
    isAdding: true,
  });
  return newState;
}

function addItemSuccess(state, item) {
  const items = state.data;
  const newState = Object.assign({}, state, {
    error: null,
    isAdding: false,
    data: addToList(items, item),
  });
  return newState;
}

function addItemFailure(state, error) {
  const newState = Object.assign({}, state, {
    error: String(error),
    isAdding: false,
  });
  return newState;
}

export default function (state = {}, action) {
  switch (action.type) {
    case `${FETCH_ITEMS}_REQUEST`:
      return fetchItemRequest();
    case `${FETCH_ITEMS}_SUCCESS`:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.items,
        error: null,
      });
    case `${FETCH_ITEMS}_FAILURE`:
      return Object.assign({}, state, {
        isFetching: false,
        error: String(action.error),
      });

    case `${DELETE_ITEM}_REQUEST`:
      return deleteItemRequest(state, action.itemId);
    case `${DELETE_ITEM}_SUCCESS`:
      return deleteItemSuccess(state, action.itemId);
    case `${DELETE_ITEM}_FAILURE`:
      return deleteItemFailure(state, action.itemId, action.error);

    case `${ADD_ITEM}_REQUEST`:
      return addItemRequest(state);
    case `${ADD_ITEM}_SUCCESS`:
      return addItemSuccess(state, action.item);
    case `${ADD_ITEM}_FAILURE`:
      return addItemFailure(state, action.error);

    default:
      return state;
  }
}
