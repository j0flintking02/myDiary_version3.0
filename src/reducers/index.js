import { combineReducers } from 'redux';
import addUser from './signupReducer'

export default combineReducers({
    user: addUser
});