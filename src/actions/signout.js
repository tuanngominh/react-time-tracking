import firebase from '../configureFirebase'
import history from '../history'
import * as types from '../constants/ActionTypes'

const actionFailed = (errorMessage) => {
  return {
    type: types.SIGNOUT,
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

const actionSuccess = (user) => {
  return {
    type: types.SIGNOUT,
    status: 'success',
    isFetching: false
  }
}

const actionStart = () => {
  return {
    type: types.SIGNOUT,
    isFetching: true
  }
}

export const signout = () => {
  return function(dispatch) {
    dispatch(actionStart())
    
    const promise = firebase.auth().signOut()
    promise.then(function(){
      dispatch(actionSuccess())
      history.push('/login')
    })
    .catch(function(){
      dispatch(actionFailed())
    })

    //return promise so github.com/arnaudbenard/redux-mock-store works
    return promise
  }
}