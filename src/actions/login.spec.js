import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {mockSignInWithEmailAndPassword} from './utils/mocks'
jest.mock('firebase/app', () => { return mockSignInWithEmailAndPassword(true)})
jest.mock('firebase/auth', () => {})

import {login} from './login'
import * as types from '../constants/ActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('login action', () => {

  it('success', () => {
    const store = mockStore({})
    const email = 'a1@a.com', password = '123456'
    const expectedActions = [
      { type: types.LOGIN, isFetching: true },
      { type: types.LOGIN, status: 'success', isFetching: false, user: {} }
    ]
    store.dispatch(login(email, password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })

  it('failed', () => {
    const email = 'a1@a.com', password = '123456', errorMessage = 'errorMessage'
    jest.mock('firebase/app', () => { return mockSignInWithEmailAndPassword(false, errorMessage)})

    const store = mockStore({})
    const expectedActions = [
      { type: types.LOGIN, isFetching: true },
      { type: types.LOGIN, status: 'error', isFetching: false, errorMessage: 'errorMessage'}
    ]
    store.dispatch(login(email, password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })  

})