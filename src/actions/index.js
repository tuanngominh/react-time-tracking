import auth from '../components/auth/auth'

const loginFailed = (errorMessage) => {
  console.log('loginFailed:' + errorMessage)
  return {
    type: 'LOGIN',
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

const loginSuccess = () => {
  return {
    type: 'LOGIN',
    status: 'success',
    isFetching: false
  }
}

const loginStart = () => {
  return {
    type: 'LOGIN',
    isFetching: true
  }
}

export const login = (email, password) => {
  return function(dispatch) {
    dispatch(loginStart())
    auth.login(email, password, (loggedIn) => {
      if (!loggedIn) {
        dispatch(loginFailed("Email or password is not correct"))
      } else {
        dispatch(loginSuccess())
      }
    })
  }
}