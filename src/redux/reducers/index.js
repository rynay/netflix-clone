import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
});

export default rootReducer;
