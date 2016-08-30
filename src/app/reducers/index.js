import { combineReducers } from 'redux';
import filterState from './Filter/filter';
import account from './Account/account';
import intl from './Intl/intl';
import todo from '../Todo/reducers/reducers';

export default combineReducers({
  filterState,
  todo,
  account,
  intl,
});
