import { combineReducers } from 'redux';
import addUser from './signupReducer';
import loginReducer from './loginReducer';
import entriesReducer from './entriesReducer';

export default combineReducers({
  user: addUser,
  login: loginReducer,
  entries: entriesReducer,
});
