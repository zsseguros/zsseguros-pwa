import {combineReducers} from 'redux';
import {login} from './loginReducer';
import { client } from './clientsReducer';

const wholeState = combineReducers({
  login,
  client
});

export default wholeState;