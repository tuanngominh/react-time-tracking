import * as types from '../constants/ActionTypes'

const timeEntryInput = (state = {}, action) => {
  switch (action.type) {
    case types.TIME_ENTRY_INPUT__START: 
      if (
        (action.status && action.status === 'success')
        ||
        (action.isFetching)
      ) {
        return { 
          text: action.payload.text,
          startTime: action.payload.startTime,
          isFetching: action.isFetching
        }
      } else {
        return Object.assign({}, state, {isFetching: action.isFetching})
      }

    case types.TIME_ENTRY_INPUT__PULL:
      if (action.status && action.status === 'success' && action.payload) {
        return {
          text: action.payload.text,
          startTime: action.payload.startTime,
          isFetching: action.isFetching,
          tagName: action.payload.tagName,
          tagColor: action.payload.tagColor  
        }
      } else {
        return Object.assign({}, state, {isFetching: action.isFetching})
      }
    
    case types.TIME_ENTRY_INPUT__STOP:
      if (action.status && action.status === 'success') {
        return {}
      } else {
        return Object.assign({}, state, {isFetching: action.isFetching})
      }

    case types.TIME_ENTRY_INPUT__CHANGE_TEXT:
      if (
        (action.status && action.status === 'success')
        ||
        (action.isFetching)
      ) {
        return Object.assign({}, state, {
          text: action.payload.text,
          isFetching: action.isFetching
        })
      } else {
        return state
      }

    case types.TIME_ENTRY_INPUT__CHANGE_START_TIME:
      if (
        (action.status && action.status === 'success')
        ||
        (action.isFetching)
      ) {
        return Object.assign({}, state, {
          startTime: action.payload.startTime,
          isFetching: action.isFetching
        })
      } else {
        return state
      }       

    case types.TIME_ENTRY_INPUT__REMOVE:
      if (action.status && action.status === 'success') {
        return {}
      } else {
        return Object.assign({}, state, {isFetching: action.isFetching})
      }

    case types.TIME_ENTRY_INPUT__ASSIGN_TAG:
      if (action.isFetching && action.isFetching === true) {
        return Object.assign({}, state, {
          isFetching: true
        })
      }

      if (
        (action.status && action.status === 'success')
      ) {
        return Object.assign({}, state, {
          tagName: action.payload.tagName,
          tagColor: action.payload.tagColor,
          isFetching: false
        })
      }
      
      return state

    case types.TIME_ENTRY_INPUT__ASSIGN_TAG_KEY:
      if (action.isFetching && action.isFetching === true) {
        return Object.assign({}, state, {
          isFetching: true
        })
      }

      if (
        (action.status && action.status === 'success')
      ) {
        return Object.assign({}, state, {
          tagName: action.payload.tagName,
          tagColor: action.payload.tagColor,
          isFetching: false
        })
      }
      
      return state      

    default :
      return state
  }
}

export default timeEntryInput