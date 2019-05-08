
import { combineReducers } from 'redux'
import login from './login';
import deposit from './deposit';

export default combineReducers({
    login,
    deposit
  })