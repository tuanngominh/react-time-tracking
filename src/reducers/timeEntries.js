import * as types from '../constants/ActionTypes'

const timeEntries = (state = {}, action) => {
  switch (action.type) {
    case types.TIME_ENTRIES_FETCH_LIST:
      if (action.isFetching && action.isFetching === true) {
        //keep current entries untouch during fetching
        if (state.entries) {
          return Object.assign({}, state, {
            isFetching: true
          })  
        } 
        //if no entries present then provide empty list
        else {
          return Object.assign({}, state, {
            entries: {},
            isFetching: true
          })
        }
      }

      if (action.status && action.status === 'success') {
        return { 
          entries: action.payload.entries,
          isFetching: false
        }
      }

      return state

    case types.TIME_ENTRIES__ASSIGN_TAG_ID:
    case types.TIME_ENTRIES__ASSIGN_TAG:
      if (action.isFetching && action.isFetching === true) {
        return Object.assign({}, state, {
          isFetching: true
        })
      }
      if (action.status && action.status === 'success') {
        let entry = Object.assign({}, state.entries[action.payload.entryId])
        entry.tagId = action.payload.tagId

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