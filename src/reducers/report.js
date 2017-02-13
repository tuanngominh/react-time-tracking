import * as types from '../constants/ActionTypes'

const report = (state = {}, action) => {
  switch (action.type) {
    case types.REPORT_FETCH:
      if (
        (action.status && action.status === 'success')
      ) {
        const {entries, startDate, endDate} = action.payload
        return { 
          entries, 
          startDate, 
          endDate,
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

export default report