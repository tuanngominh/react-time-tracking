import reducer from '../timeEntries'
import * as types from '../../constants/ActionTypes'

describe('timeEntries reducer', () => {

  it('initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('fetching entries from server - fetching', () => {
    const isFetching = true

    expect(
      reducer(undefined, {
        type: types.TIME_ENTRIES_FETCH_LIST,
        isFetching
      })
    ).toEqual({entries: {}, isFetching})
  })

  it('fetching entries from server - success', () => {
    const entries = {}
    const isFetching = false
    
    expect(
      reducer(undefined, {
        type: types.TIME_ENTRIES_FETCH_LIST,
        status: 'success',
        payload: {entries},
        isFetching
      })
    ).toEqual({entries, isFetching})
  })

})