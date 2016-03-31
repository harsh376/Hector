/* eslint no-unused-vars: ["error", { "args": "none" }]*/
export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
};
/* eslint no-unused-vars: ["error", { "args": "after-used" }]*/
