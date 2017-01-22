/*global firebase*/

const actionFailed = (errorMessage) => {
  return {
    type: 'LOGIN',
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

const actionSuccess = (user) => {
  return {
    type: 'LOGIN',
    status: 'success',
    isFetching: false,
    user: user
  }
}

const actionStart = () => {
  return {
    type: 'LOGIN',
    isFetching: true
  }
}

export const login = (email, password) => {
  return function(dispatch) {
    dispatch(actionStart())
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
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
  }
}