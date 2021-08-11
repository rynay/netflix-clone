import { combineReducers } from 'redux'
import user from './userSlice'
import error from './errorSlice'
import path from './pathSlice'
import data from './dataSlice'
import signUpEmail from './signUpEmailSlice'
import currentWatcher from './currentWatcherSlice'
import filteredData from './filteredDataSlice'
import formattedData from './formattedDataSlice'

const rootReducer = combineReducers({
  user,
  error,
  path,
  signUpEmail,
  data,
  currentWatcher,
  filteredData,
  formattedData,
})

export default rootReducer
