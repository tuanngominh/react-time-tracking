import firebase from '../configureFirebase'
import * as types from '../constants/ActionTypes'
import {actionStart, actionSuccess} from './utils/template'

export const fetchList = (uid, text) => {
  return function(dispatch) {
    dispatch(actionStart(types.TAGS_FETCH_LIST))
    
    const ref = firebase.database().ref('tags/' + uid)
    return new Promise(function(resolve, reject){
      ref.on('value', function(snapshot){
        let entries = []
        snapshot.forEach(function(childSnapshot){
          entries.push(Object.assign(childSnapshot.val(), {key : childSnapshot.key}))
        })
        dispatch(actionSuccess(types.TAGS_FETCH_LIST, {payload: entries}))

        resolve()
      })
    })
  }
}