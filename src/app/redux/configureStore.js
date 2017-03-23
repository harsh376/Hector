const configureStore = (process.env.NODE_ENV === 'production') ? require('./store/configureStore.prod') : require('./store/configureStore.dev');

module.exports = configureStore;
