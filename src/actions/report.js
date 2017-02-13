import firebase from '../configureFirebase'
import * as types from '../constants/ActionTypes'
import {actionStart, actionSuccess} from './utils/template'

// Fetch report data
export const fetch = (uid, text, startDate, endDate) => {
  return function(dispatch) {
    dispatch(actionStart(types.REPORT_FETCH))

    const ref = firebase.database().ref('timeEntries/' + uid)
      .orderByChild('startTime')
        .startAt(startDate.getTime())
        .endAt(endDate.getTime())

    return new Promise(function(resolve, reject){      
      ref.on('value', function(snapshot){
        let entries = snapshot.val()
        let filteredEntries = {}

        for (let key in entries) {
          if (entries.hasOwnProperty(key)) {
            entries[key].startTime = new Date(entries[key].startTime)
            entries[key].endTime = new Date(entries[key].endTime)
            //filter text on clientside
            if (text) {
              if (entries[key].text.indexOf(text) !== -1) {
                filteredEntries[key] = entries[key]
              }            
            }
          }
        }

        if (text) {
          entries = filteredEntries
        }

        dispatch(actionSuccess(types.REPORT_FETCH, {payload: {
          entries,
          startDate,
          endDate
        }}))

        resolve()
      })
    })
  }
}