import fetch from 'isomorphic-fetch';

export default function isLoggedIn() {
  return fetch('/account', { credentials: 'include' })
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json());
}
