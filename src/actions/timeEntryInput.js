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

export const stop = (uid, text, date) => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRY_INPUT__STOP))

    //create complete time entry
    const newEntryRef = firebase.database().ref('timeEntries/' + uid).push()
    const now = new Date()
    const newEntryPromise = newEntryRef.set({
      text: text,
      startTime: date.toJSON(),
      endTime: now.toJSON()
    })
    
    //delete current tracking entry
    newEntryPromise.then(function(){
      const deleteEntryPromise = firebase.database().ref('timeEntryInputs/' + uid).remove()
      deleteEntryPromise.then(function(){
        dispatch(actionSuccess(types.TIME_ENTRY_INPUT__STOP))
      })
      .catch(function(){
        dispatch(actionFailed(types.TIME_ENTRY_INPUT__STOP))
      })
    })
    .catch(function(){
      dispatch(actionFailed(types.TIME_ENTRY_INPUT__STOP))
    })
  }
}

//Pull tracking entry from server
export const pull = (uid) => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRY_INPUT__PULL))
    
    return new Promise((resolve, reject) => {
      const ref = firebase.database().ref('timeEntryInputs/' + uid)
      ref.once('value', function(snapshot){
        const val = snapshot.val()
        if (val) {
          dispatch(actionSuccess(types.TIME_ENTRY_INPUT__PULL, {payload: {
            text: val.text,
            startTime: val.startTime
          }}))
        } else {
          dispatch(actionSuccess(types.TIME_ENTRY_INPUT__PULL, {payload: null}))
        }
        resolve()
      })
    })
  }
}

export const start = (uid, text, date) => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRY_INPUT__START))
    
    const entryData = {
      text: text,
      startTime: date.toJSON()
    }
    const promise = firebase.database().ref('timeEntryInputs/' + uid).set(entryData)
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