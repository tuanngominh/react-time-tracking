import * as types from '../constants/ActionTypes'

const auth = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN: 
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

    case types.REGISTER:
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

    case types.IS_USER_LOGGEDIN:
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

    case types.SIGNOUT:
      if (action.status === 'success') {
        return {
          ...action,
          userLoggedIn: false
        }
      } else {
        return {
          ...action,
          userLoggedIn: state.userLoggedIn
        }
      }

    default :
      return state
  }
}

export default auth