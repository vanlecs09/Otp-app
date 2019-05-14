
import { combineReducers } from 'redux'
import login from './login';
import deposit from './deposit';
import history from './history';

export default combineReducers({
    login,
    deposit,
    history
  })