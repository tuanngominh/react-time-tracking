import firebase from '../configureFirebase'
import * as types from '../constants/ActionTypes'
import {actionStart, actionSuccess} from './utils/template'

// Fetch report data
export const fetch = (uid, text, startDate, endDate) => {
  console.log('fetch')
  console.log({uid, text, startDate, endDate})
  return function(dispatch) {
    dispatch(actionStart(types.REPORT_FETCH))
    const ref = firebase.database().ref('timeEntries/' + uid)
    //filter by date on serverside
    ref.orderByChild('startDate').startAt(startDate.toJSON()).endAt(endDate.toJSON())
    return new Promise(function(resolve, reject){
      ref.once('value', function(snapshot){
        let entries = {}
        snapshot.forEach(function(childSnapshot){
          var childKey = childSnapshot.key
          var childData = childSnapshot.val()
          //filter text on clientside
          if (text) {
            if (childData.text.indexOf(text) !== -1) {
              entries[childKey] = childData
            }            
          } else {
            entries[childKey] = childData
          }
        })

        dispatch(actionSuccess(types.REPORT_FETCH, {payload: {
          entries
        }}))

        console.log('entries')
        console.log(entries)

        resolve()
      })
    })
  }
}