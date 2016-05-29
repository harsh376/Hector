import request from 'request';
import q from 'q';
import config from './config';

// TODO: write tests for this file

export function makeRequest(method, url, params, data, headers) {
  const deferred = q.defer();
  const baseRequest = request.defaults({
    baseUrl: config.Ajax.host,
    json: true,
  });
  const options = {
    method,
    url,
    qs: params || {},
    body: data || {},
    headers: headers || {},
  };

  function callback(error, response, body) {
    if (!error && Math.floor(response.statusCode / 100) === 2) {
      deferred.resolve(body);
    } else {
      deferred.reject(body);
    }
  }

  baseRequest(options, callback);

  return deferred.promise;
}

export function upsert(url, params, data, headers) {
  const deferred = q.defer();

  makeRequest('GET', url, params, null, headers)
    .then(resp1 => {
      if (resp1.length) {
        const detailUrl = `${url}/${resp1[0].id}`;
        makeRequest('PATCH', detailUrl, null, data, headers)
          .then(resp2 => deferred.resolve(resp2))
          .catch(() => deferred.reject(new Error('PATCH failed')));
      } else {
        makeRequest('POST', url, null, data, headers)
          .then(resp2 => deferred.resolve(resp2))
          .catch(() => deferred.reject(new Error('POST failed')));
      }
    })
    .catch(() => deferred.reject(new Error('GET failed')));

  return deferred.promise;
}
