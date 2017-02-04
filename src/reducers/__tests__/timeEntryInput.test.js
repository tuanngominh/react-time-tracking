import reducer from '../timeEntryInput'
import * as types from '../../constants/ActionTypes'

describe('timeEntryInput reducer', () => {

  it('initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  const uid = '123'
  const text = "text"
  const startTime = (new Date()).toJSON()
  const isFetching = false

  it('start entry input - success', () => {
    expect(
      reducer(undefined, {
        type: types.TIME_ENTRY_INPUT__START,
        status: 'success',
        payload: {text, startTime},
        isFetching
      })
    ).toEqual({text, startTime, isFetching})
  })

  it('pull entry input from server - success', () => {
    expect(
      reducer(undefined, {
        type: types.TIME_ENTRY_INPUT__PULL,
        status: 'success',
        payload: {text, startTime},
        isFetching
      })
    ).toEqual({text, startTime, isFetching})
  })

  it('entry input - change start time - success', () => {
    expect(
      reducer(undefined, {
        type: types.TIME_ENTRY_INPUT__CHANGE_START_TIME,
        status: 'success',
        payload: {startTime},
        isFetching
      })
    ).toEqual({startTime, isFetching})
  })

  it('entry input - change text - success', () => {
    expect(
      reducer(undefined, {
        type: types.TIME_ENTRY_INPUT__CHANGE_TEXT,
        status: 'success',
        payload: {text},
        isFetching
      })
    ).toEqual({text, isFetching})
  })

})