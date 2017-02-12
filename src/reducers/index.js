import {combineReducers} from 'redux'
import auth from './auth'
import resetPassword from './resetPassword'
import timeEntryInput from './timeEntryInput'
import timeEntries from './timeEntries'
import report from './report'

const rootReducer = combineReducers({
  auth,
  resetPassword,
  timeEntryInput,
  timeEntries,
  report
})

export default rootReducer