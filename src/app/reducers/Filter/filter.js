import { Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

/*
function asyncRequest(state, action) {

}

function asyncSuccess(state, action) {

}

function asyncFailure(state, action) {

}

*/
export default function (state = new Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    default:
      return state;
  }
}
