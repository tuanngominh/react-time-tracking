import {combineReducers} from 'redux'
import auth from './auth'
import resetPassword from './resetPassword'
import timeEntryInput from './timeEntryInput'

const rootReducer = combineReducers({
  auth,
  resetPassword,
  timeEntryInput
})

export default rootReducer