/*global firebase*/

const actionFailed = (errorMessage) => {
  return {
    type: 'IS_USER_LOGGEDIN',
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

const actionSuccess = (user) => {
  return {
    type: 'IS_USER_LOGGEDIN',
    status: 'success',
    isFetching: false,
    user: user
  }
}

const actionStart = () => {
  return {
    type: 'IS_USER_LOGGEDIN',
    isFetching: true
  }
}

// Check if user already logged in with current browser
export const isUserLoggedIn = () => {
  return function(dispatch) {
    dispatch(actionStart())
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(actionSuccess(user))
      } else {
        dispatch(actionFailed())
      }
    })    
  }
}