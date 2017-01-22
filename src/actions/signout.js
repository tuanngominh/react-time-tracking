/*global firebase*/
import history from '../history'

const actionFailed = (errorMessage) => {
  return {
    type: 'SIGNOUT',
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

const actionSuccess = (user) => {
  return {
    type: 'SIGNOUT',
    status: 'success',
    isFetching: false
  }
}

const actionStart = () => {
  return {
    type: 'SIGNOUT',
    isFetching: true
  }
}

export const signout = (email, password) => {
  return function(dispatch) {
    dispatch(actionStart())
    
    firebase.auth().signOut()
    .then(function(){
      dispatch(actionSuccess())
      history.push('/login')
    })
    .catch(function(){
      dispatch(actionFailed())
    })
  }
}