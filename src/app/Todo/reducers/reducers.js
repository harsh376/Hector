import {
  FETCH_ITEMS,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
} from '../constants/actionTypes';

function fetchItemRequest(state) {
  const newState = Object.assign({}, state, {
    isFetching: true,
    error: null,
  });
  delete newState.deleteItem;
  return newState;
}

/*
 *******************
 * DELETE_ITEM
 *******************
 */

function removeFromList(list, itemId) {
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i].id === itemId) {
      list.splice(i, 1);
    }
  }
  // returns a copy
  return list.slice(0);
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

/*
 *******************
 * ADD_ITEM
 *******************
 */

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

/*
 *******************
 * UPDATE_ITEM
 *******************
 */

function updateItem(list, item) {
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i].id === item.id) {
      Object.assign(list[i], item);
    }
  }

  // returns a copy
  return list.slice(0);
}

function updateItemRequest(state, itemId) {
  const newState = Object.assign({}, state, {
    error: null,
    isUpdating: true,
    updatingItem: itemId,
  });
  return newState;
}

function updateItemSuccess(state, item) {
  const items = state.data;
  const newState = Object.assign({}, state, {
    error: null,
    isUpdating: false,
    updatingItem: item.id,
    data: updateItem(items, item),
  });
  return newState;
}

function updateItemFailure(state, itemId, error) {
  const newState = Object.assign({}, state, {
    error: String(error),
    isUpdating: false,
    updatingItem: itemId,
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

    case `${UPDATE_ITEM}_REQUEST`:
      return updateItemRequest(state, action.itemId);
    case `${UPDATE_ITEM}_SUCCESS`:
      return updateItemSuccess(state, action.item);
    case `${UPDATE_ITEM}_FAILURE`:
      return updateItemFailure(state, action.itemId, action.error);

    default:
      return state;
  }
}
