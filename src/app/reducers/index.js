import { combineReducers } from 'redux';
import auth from '../Auth/reducers/reducers';
import todo from '../Todo/reducers/reducers';
import intl from '../CustomNavBar/reducers/reducers';

export default combineReducers({
  todo,
  auth,
  intl,
});
