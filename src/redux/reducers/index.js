import { combineReducers } from 'redux';
import { userReducer as user } from './userReducer';
import { errorReducer as error } from './errorReducer';
import { pathReducer as path } from './pathReducer';
import { dataReducer as data } from './dataReducer';
import { signUpEmailReducer as signUpEmail } from './signUpEmailReducer';

const rootReducer = combineReducers({
  user,
  error,
  path,
  signUpEmail,
  data,
});

export default rootReducer;
