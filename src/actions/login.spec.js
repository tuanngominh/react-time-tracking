import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {mockFirebase} from './utils/mocks'
jest.mock('firebase/app', () => { return mockFirebase()})
jest.mock('firebase/auth', () => {})
jest.mock('firebase/database', () => {})
import firebase from '../configureFirebase'

import {login} from './login'
import * as types from '../constants/ActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('login action', () => {

  it('success', () => {
    firebase.setMockScenarioData({
      mockSuccessCase: true,
      user: {}
    })

    const store = mockStore({})
    const email = 'a1@a.com', password = '123456'
    const expectedActions = [
      { type: types.LOGIN, isFetching: true },
      { type: types.LOGIN, status: 'success', isFetching: false, user: {} }
    ]
    return store.dispatch(login(email, password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })

  it('failed', () => {
    const email = 'a1@a.com', password = '123456', errorMessage = 'errorMessage'
    firebase.setMockScenarioData({
      mockSuccessCase: false,
      errorMessage
    })

    const store = mockStore({})
    const expectedActions = [
      { type: types.LOGIN, isFetching: true },
      { type: types.LOGIN, status: 'error', isFetching: false, errorMessage: errorMessage}
    ]
    return store.dispatch(login(email, password))
      .then(() => {})
      .catch(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    
  })  

})