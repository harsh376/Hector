import { combineReducers } from 'redux';
import filterState from './Filter/filter';
import todo from './Todo/todo';
import auth from './Auth/auth';

export default combineReducers({
  filterState,
  todo,
  auth,
});
