import * as types from '../constants/ActionTypes'

const timeEntries = (state = {}, action) => {
  switch (action.type) {
    case types.TIME_ENTRIES_FETCH_LIST:
      if (
        (action.status && action.status === 'success')
      ) {
        return { 
          entries: action.payload.entries,
          isFetching: action.isFetching
        }
      } else if ('isFetching' in action) {
        return Object.assign({}, state, {
          isFetching: action.isFetching, 
          entries: {}
        })
      }
      return state

    case types.TIME_ENTRIES__ASSIGN_TAG_ID:
      if (action.isFetching && action.isFetching === true) {
        return Object.assign({}, state, {
          isFetching: true
        })
      }
      if (action.status && action.status === 'success') {
        let entry = Object.assign({}, state.entries[action.payload.entryId])
        entry.tagName = action.payload.tagName
        entry.tagColor = action.payload.tagColor

        let entries = Object.assign({}, state.entries)
        entries[action.payload.entryId] = entry

        return {
          isFetching: false,
          entries: entries
        }
      }
      return state
      
    default :
      return state
  }
}

export default timeEntries