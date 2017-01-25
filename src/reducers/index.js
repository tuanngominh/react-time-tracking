import {combineReducers} from 'redux'
import auth from './auth'
import resetPassword from './resetPassword'

const rootReducer = combineReducers({
  auth,
  resetPassword
})

export default rootReducer