import reducer from '../auth'
import * as types from '../../constants/ActionTypes'

describe('auth reducer', () => {

  it('initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('login success', () => {
    expect(
      reducer(undefined, {
        type: types.LOGIN,
        status: 'success'
      })
    ).toEqual({
      type: types.LOGIN,
      status: 'success',
      userLoggedIn: true
    })
  })

  it('login failed', () => {
    expect(
      reducer(undefined, {
        type: types.LOGIN,
        status: 'error'
      })
    ).toEqual({
      type: types.LOGIN,
      status: 'error',
      userLoggedIn: false
    })
  })

  it('register success', () => {
    expect(
      reducer(undefined, {
        type: types.REGISTER,
        status: 'success'
      })
    ).toEqual({
      type: types.REGISTER,
      status: 'success',
      userLoggedIn: true
    })
  })

  it('register failed', () => {
    expect(
      reducer(undefined, {
        type: types.REGISTER,
        status: 'error'
      })
    ).toEqual({
      type: types.REGISTER,
      status: 'error',
      userLoggedIn: false
    })
  })

  it('is user logged in - success', () => {
    expect(
      reducer(undefined, {
        type: types.IS_USER_LOGGEDIN,
        status: 'success'
      })
    ).toEqual({
      type: types.IS_USER_LOGGEDIN,
      status: 'success',
      userLoggedIn: true
    })
  })

  it('is user logged in - failed', () => {
    expect(
      reducer(undefined, {
        type: types.IS_USER_LOGGEDIN,
        status: 'error'
      })
    ).toEqual({
      type: types.IS_USER_LOGGEDIN,
      status: 'error',
      userLoggedIn: false
    })
  })  

  it('signout success', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNOUT,
        status: 'success'
      })
    ).toEqual({
      type: types.SIGNOUT,
      status: 'success',
      userLoggedIn: false
    })
  })

  it('signout failed', () => {
    expect(
      reducer({
        userLoggedIn: true
      }, {
        type: types.SIGNOUT,
        status: 'error'
      })
    ).toEqual({
      type: types.SIGNOUT,
      status: 'error',
      userLoggedIn: true
    })

    expect(
      reducer({
        userLoggedIn: false
      }, {
        type: types.SIGNOUT,
        status: 'error'
      })
    ).toEqual({
      type: types.SIGNOUT,
      status: 'error',
      userLoggedIn: false
    })
  })

})