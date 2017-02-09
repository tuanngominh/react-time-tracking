import firebase from '../configureFirebase'
import * as types from '../constants/ActionTypes'
import {actionStart, actionSuccess} from './utils/template'

export const fetchList = (uid, text) => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRIES_FETCH_LIST, {payload: {
        text
      }}))
    
    const ref = firebase.database().ref('timeEntries/' + uid)
    return new Promise(function(resolve, reject){
      ref.on('value', function(snapshot){
        let entries = {}
        snapshot.forEach(function(childSnapshot){
          var childKey = childSnapshot.key
          var childData = childSnapshot.val()
          entries[childKey] = childData
        })

        dispatch(actionSuccess(types.TIME_ENTRIES_FETCH_LIST, {payload: {
          entries
        }}))

        resolve()
      })
    })
  }
}