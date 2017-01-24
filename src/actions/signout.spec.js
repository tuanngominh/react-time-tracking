import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {mockSignOut} from './utils/mocks'
jest.mock('firebase/app', () => { return mockSignOut(true)})
jest.mock('firebase/auth', () => {})

import {signout} from './signout'
import * as types from '../constants/ActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('signout action', () => {

  it('success', () => {
    const store = mockStore({})
    const expectedActions = [
      { type: types.SIGNOUT, isFetching: true },
      { type: types.SIGNOUT, status: 'success', isFetching: false}
    ]
    store.dispatch(signout())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })

  it('failed', () => {
    const errorMessage = 'errorMessage'
    jest.mock('firebase/app', () => { return mockSignOut(false, errorMessage)})

    const store = mockStore({})
    const expectedActions = [
      { type: types.SIGNOUT, isFetching: true },
      { type: types.SIGNOUT, status: 'error', isFetching: false, errorMessage: 'errorMessage'}
    ]
    store.dispatch(signout())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })  

})