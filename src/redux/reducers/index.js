import { combineReducers } from 'redux';
import { userReducer as user } from './userReducer';
import { errorReducer as error } from './errorReducer';
import { pathReducer as path } from './pathReducer';

const rootReducer = combineReducers({
  user,
  error,
  path,
});

export default rootReducer;
