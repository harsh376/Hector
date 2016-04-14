import { combineReducers } from 'redux';
import filterState from './Filter/filter';
import todo from './Todo/todo';

export default combineReducers({
  filterState,
  todo,
});
