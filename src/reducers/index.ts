import {combineReducers} from 'redux';
import {login} from './loginReducer';

const wholeState = combineReducers({
  login
});

export default wholeState;