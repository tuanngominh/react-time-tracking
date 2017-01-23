import firebase from '../configureFirebase'
import * as types from '../constants/ActionTypes'

const actionFailed = (errorMessage) => {
  return {
    type: types.LOGIN,
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

const actionSuccess = (user) => {
  return {
    type: types.LOGIN,
    status: 'success',
    isFetching: false,
    user: user
  }
}

const actionStart = () => {
  return {
    type: types.LOGIN,
    isFetching: true
  }
}

export const login = (email, password) => {
  return function(dispatch) {
    dispatch(actionStart())
    const promise = firebase.auth().signInWithEmailAndPassword(email, password)
    promise.then((user) => {
        dispatch(actionSuccess(user))
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
        dispatch(actionFailed(errorMessage))
      });
    //return promise so github.com/arnaudbenard/redux-mock-store works
    return promise
  }
}