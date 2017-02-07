import * as types from '../constants/ActionTypes'

const timeEntries = (state = {}, action) => {
  switch (action.type) {
    case types.TIME_ENTRIES_FETCH_LIST:
      if (
        (action.status && action.status === 'success')
      ) {
        console.log(JSON.stringify(action.payload.entries))
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

    default :
      return state
  }
}

export default timeEntries