import firebase from '../configureFirebase'
import * as types from '../constants/ActionTypes'

const actionFailed = (errorMessage) => {
  return {
    type: types.IS_USER_LOGGEDIN,
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

const actionSuccess = (user) => {
  return {
    type: types.IS_USER_LOGGEDIN,
    status: 'success',
    isFetching: false,
    user: user
  }
}

const actionStart = () => {
  return {
    type: types.IS_USER_LOGGEDIN,
    isFetching: true
  }
}

// Check if user already logged in with current browser
export const isUserLoggedIn = () => {
  return function(dispatch) {
    dispatch(actionStart())

    //return promise so github.com/arnaudbenard/redux-mock-store works
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          dispatch(actionSuccess(user))
          resolve()
        } else {
          dispatch(actionFailed())
          reject()
        }
      })
    })
  }
}