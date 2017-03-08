import fetch from 'isomorphic-fetch';
import FETCH_USER from '../constants/actionTypes';

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

export default function fetchAccountDetails() {
  return function getUser(dispatch) {
    dispatch({ type: `${FETCH_USER}_REQUEST` });

    return fetch('/account', { credentials: 'include' }).then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      },
    )
    .then(user => dispatch(fetchUserSuccess(user)))
    .catch(e => dispatch(fetchUserFailure(e)));
  };
}
