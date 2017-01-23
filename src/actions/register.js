import firebase from '../configureFirebase'
import * as types from '../constants/ActionTypes'

const registerFailed = (errorMessage) => {
  return {
    type: types.REGISTER,
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

const registerSuccess = (user) => {
  return {
    type: types.REGISTER,
    status: 'success',
    isFetching: false,
    user: user
  }
}

const registerStart = () => {
  return {
    type: types.REGISTER,
    isFetching: true
  }
}

export const register = (email, password) => {
  return function(dispatch) {
    dispatch(registerStart())
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password)
    promise.then((user) => {
      dispatch(registerSuccess(user))
    })
    .catch(function(error) {
      let errorMessage

      switch (error.code) {
        case 'auth/weak-password':
          errorMessage = 'The password is too weak.'
          break
        default:
          errorMessage = error.message
      }
      dispatch(registerFailed(errorMessage))
    })
    //return promise so github.com/arnaudbenard/redux-mock-store works
    return promise
  }
}