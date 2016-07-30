import { combineReducers } from 'redux';
import filterState from './Filter/filter';
import todo from './Todo/todo';
import account from './Account/account';
import intl from './Intl/intl';

export default combineReducers({
  filterState,
  todo,
  account,
  intl,
});
