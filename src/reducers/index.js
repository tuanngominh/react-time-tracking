import {combineReducers} from 'redux'
import auth from './auth'
import resetPassword from './resetPassword'
import timeEntryInput from './timeEntryInput'
import timeEntries from './timeEntries'

const rootReducer = combineReducers({
  auth,
  resetPassword,
  timeEntryInput,
  timeEntries
})

export default rootReducer