import fetch from 'isomorphic-fetch';
import {
  UPDATE_LOCALE,
  FETCH_USER,
} from '../constants/actionTypes';

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

function fetchUserSuccess(user) {
  return {
    type: `${FETCH_USER}_SUCCESS`,
    user,
  };
}

function fetchUserFailure(error) {
  return {
    type: `${FETCH_USER}_FAILURE`,
    error,
  };
}

export function fetchAccountDetails() {
  return function getUser(dispatch) {
    dispatch({ type: `${FETCH_USER}_REQUEST` });

    return fetch('/account', { credentials: 'include' }).then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      }
    )
    .then(user => dispatch(fetchUserSuccess(user)))
    .catch(e => dispatch(fetchUserFailure(e)));
  };
}

export function updateLocale(payload) {
  return {
    type: UPDATE_LOCALE,
    payload,
  };
}
