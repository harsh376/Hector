import fetch from 'isomorphic-fetch';

export function isLoggedIn() {
  return fetch('/account', { credentials: 'include' })
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json());
}
