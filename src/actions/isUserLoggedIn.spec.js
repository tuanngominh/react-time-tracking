import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {mockOnAuthStateChanged} from './mocks'
jest.mock('firebase/app', () => { return mockOnAuthStateChanged(true)})
jest.mock('firebase/auth', () => {})

import {isUserLoggedIn} from './isUserLoggedIn'
import * as types from '../constants/ActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('isUserLoggedIn action', () => {

  it('success', () => {
    const store = mockStore({})
    const expectedActions = [
      { type: types.IS_USER_LOGGEDIN, isFetching: true },
      { type: types.IS_USER_LOGGEDIN, status: 'success', isFetching: false}
    ]
    store.dispatch(isUserLoggedIn())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })

  it('failed', () => {
    const errorMessage = 'errorMessage'
    jest.mock('firebase/app', () => { return mockOnAuthStateChanged(false, errorMessage)})

    const store = mockStore({})
    const expectedActions = [
      { type: types.IS_USER_LOGGEDIN, isFetching: true },
      { type: types.IS_USER_LOGGEDIN, status: 'error', isFetching: false, errorMessage: 'errorMessage'}
    ]
    store.dispatch(isUserLoggedIn())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })  

})