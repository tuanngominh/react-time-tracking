import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {mockCreateUserWithEmailAndPassword} from './mocks'
jest.mock('firebase/app', () => { return mockCreateUserWithEmailAndPassword(true)})
jest.mock('firebase/auth', () => {})

import {register} from './register'
import * as types from '../constants/ActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('register action', () => {

  it('success', () => {
    const store = mockStore({})
    const email = 'a1@a.com', password = '123456'
    const expectedActions = [
      { type: types.REGISTER, isFetching: true },
      { type: types.REGISTER, status: 'success', isFetching: false, user: {}}
    ]
    store.dispatch(register(email, password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })

  it('failed', () => {
    const errorMessage = 'errorMessage'
    jest.mock('firebase/app', () => { return mockCreateUserWithEmailAndPassword(false, errorMessage)})

    const store = mockStore({})
    const email = 'a1@a.com', password = '123456'
    const expectedActions = [
      { type: types.REGISTER, isFetching: true },
      { type: types.REGISTER, status: 'error', isFetching: false, errorMessage: 'errorMessage'}
    ]
    store.dispatch(register(email, password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })  

})