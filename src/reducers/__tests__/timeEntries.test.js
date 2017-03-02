import reducer from '../timeEntries'
import * as types from '../../constants/ActionTypes'

describe('timeEntries reducer', () => {

  it('initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('return empty entries list during fetching from server', () => {
    const isFetching = true

    expect(
      reducer(undefined, {
        type: types.TIME_ENTRIES_FETCH_LIST,
        isFetching
      })
    ).toEqual({entries: {}, isFetching})
  })

  const startTime = (new Date(Date.UTC(2017, 1, 12, 20, 20, 0))).getTime()
  const endTime =   (new Date(Date.UTC(2017, 1, 12, 20, 40, 0))).getTime()
  const entryText = 'entryText'
  
  it('doesn\'t modify current entries during fetching from server', () => {
    const isFetching = true
    const currentEntries = {
      'entry1': { startTime, endTime, entryText}
    }
    expect(
      reducer({entries: currentEntries}, {
        type: types.TIME_ENTRIES_FETCH_LIST,
        isFetching
      })
    ).toEqual({entries: currentEntries, isFetching})
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