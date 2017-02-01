import firebase from '../configureFirebase'
import * as types from '../constants/ActionTypes'
import {actionStart, actionFailed, actionSuccess} from './utils/template'

export const changeText = (text) => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRY_INPUT__CHANGE_TEXT))
    console.log('changeText' + text)
    dispatch(actionSuccess(types.TIME_ENTRY_INPUT__CHANGE_TEXT))
    dispatch(actionFailed(types.TIME_ENTRY_INPUT__CHANGE_TEXT))
  }
}

export const changeStartTime = (date) => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRY_INPUT__CHANGE_START_TIME))
    console.log('changeStartTime' + date)
    dispatch(actionSuccess(types.TIME_ENTRY_INPUT__CHANGE_START_TIME))
    dispatch(actionFailed(types.TIME_ENTRY_INPUT__CHANGE_START_TIME))
  }
}

export const stop = () => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRY_INPUT__STOP))
    console.log('stop')
    dispatch(actionSuccess(types.TIME_ENTRY_INPUT__STOP))
    dispatch(actionFailed(types.TIME_ENTRY_INPUT__STOP))
  }
}

export const start = (uid, text, date) => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRY_INPUT__START))
    
    const entryData = {
      text: text,
      startTime: date.toJSON()
    }
    let updates = {
      'timeEntryInputs': {
        [uid]: entryData
      }
    }
    const promise = firebase.database().ref().update(updates)
    promise
    .then((data) => {
      dispatch(actionSuccess(types.TIME_ENTRY_INPUT__START, {payload: {
        text: text,
        startTime: date.toJSON()
      }}))
    })
    .catch(() => {
      dispatch(actionFailed(types.TIME_ENTRY_INPUT__START))  
    })

    return promise    
  }
}