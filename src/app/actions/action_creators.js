import fetch from 'isomorphic-fetch';
import {
  UPDATE_LOCALE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
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

function userSuccess(user) {
  return {
    type: USER_SUCCESS,
    user,
  };
}

function userFailure(error) {
  return {
    type: USER_FAILURE,
    error,
  };
}

export function fetchAccountDetails() {
  return function getUser(dispatch) {
    dispatch({ type: USER_REQUEST });

    return fetch('/account', { credentials: 'include' }).then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      }
    )
    .then(user => dispatch(userSuccess(user)))
    .catch(e => dispatch(userFailure(e)));
  };
}

export function updateLocale(payload) {
  return {
    type: UPDATE_LOCALE,
    payload,
  };
}
