import {combineReducers} from 'redux';
import {login} from './loginReducer';
import { client } from './clientsReducer';
import { apolices } from './apolicesReducer';

const wholeState = combineReducers({
  login,
  client,
  apolices
});

export default wholeState;