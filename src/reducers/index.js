import {combineReducers} from 'redux'
import auth from './auth'
import resetPassword from './resetPassword'
import timeEntryInput from './timeEntryInput'
import timeEntries from './timeEntries'
import tags from './tags'
import report from './report'

const rootReducer = combineReducers({
  auth,
  resetPassword,
  timeEntryInput,
  timeEntries,
  tags,
  report
})

export default rootReducer