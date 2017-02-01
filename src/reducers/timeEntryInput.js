import * as types from '../constants/ActionTypes'

const timeEntryInput = (state = {}, action) => {
  switch (action.type) {
    case types.TIME_ENTRY_INPUT__START: 
      if (action.status === 'success') {
        return { 
          text: action.payload.text,
          startTime: action.payload.startTime,
        }
      }
      return state
    default :
      return state
  }
}

export default timeEntryInput