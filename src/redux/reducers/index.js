import { combineReducers } from 'redux';
import { userReducer as user } from './userReducer';
import { errorReducer as error } from './errorReducer';
import { pathReducer as path } from './pathReducer';
import { dataReducer as data } from './dataReducer';
import { signUpEmailReducer as signUpEmail } from './signUpEmailReducer';
import { currentWatcherReducer as currentWatcher } from './currentWatcherReducer';
import { filteredDataReducer as filteredData } from './filteredDataReducer';
import { formattedDataReducer as formattedData } from './formattedDataReducer';

const rootReducer = combineReducers({
  user,
  error,
  path,
  signUpEmail,
  data,
  currentWatcher,
  filteredData,
  formattedData,
});

export default rootReducer;
