import {combineReducers} from 'redux'

const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': 
      if (action.status === 'success') {
        return { 
          ...action, 
          userLoggedIn: true
        }
      } else {
        return {
          ...action,
          userLoggedIn: false
        }
      }

    case 'REGISTER':
      if (action.status === 'success') {
        return {
          ...action,
          userLoggedIn: true
        }
      } else {
        return {
          ...action,
          userLoggedIn: false
        }
      }

    case 'IS_USER_LOGGEDIN':
      if (action.status === 'success') {
        return {
          ...action,
          userLoggedIn: true
        }
      } else {
        return {
          ...action,
          userLoggedIn: false
        }
      }

    case 'SIGNOUT':
      if (action.status === 'success') {
        return {
          ...action,
          userLoggedIn: false
        }
      } else {
        return {
          ...action,
          userLoggedIn: true
        }
      }

    default :
      return state
  }
}

const rootReducer = combineReducers({
  auth
})

export default rootReducer