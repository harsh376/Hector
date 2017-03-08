const fetch = require.requireActual('isomorphic-fetch');

module.exports = (url, config) => fetch(`http://localhost${url}`, config);
