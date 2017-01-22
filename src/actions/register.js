/*global firebase*/

const registerFailed = (errorMessage) => {
  return {
    type: 'REGISTER',
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

const registerSuccess = (user) => {
  return {
    type: 'REGISTER',
    status: 'success',
    isFetching: false,
    user: user
  }
}

const registerStart = () => {
  return {
    type: 'REGISTER',
    isFetching: true
  }
}

export const register = (email, password) => {
  return function(dispatch) {
    dispatch(registerStart())
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
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
      });
  }
}