import firebase from '../configureFirebase'
import * as types from '../constants/ActionTypes'
import {actionStart, actionSuccess, actionFailed} from './utils/template'

export const fetchList = (uid) => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRIES_FETCH_LIST))
    
    const ref = firebase.database().ref('timeEntries/' + uid)
    return new Promise((resolve, reject) => {

      let tags = {}
      const getTag = (tagId) => {
        return new Promise((resolveTag, rejectTag) => {
          if (tagId in tags) {
            resolveTag(tags[tagId])
          } else {
            firebase.database().ref('tags/' + uid + '/' + tagId).once('value')
              .then(snapshot => {
                //cache for later use
                const tag = snapshot.val()
                if (tag) {
                  tags[snapshot.key] = tag
                }
                resolveTag(tag)
              })
          }
        })
      }

      let getTagPromises = []
      ref.once('value', function(snapshot){
        let entries = {}
        snapshot.forEach(function(childSnapshot){
          var childKey = childSnapshot.key
          var childData = childSnapshot.val()
          childData.startTime = new Date(childData.startTime)
          childData.endTime = new Date(childData.endTime)

          //fetch tag async
          const getTagPromise = getTag(childData.tag)
          getTagPromises.push(getTagPromise)
          getTagPromise.then(tag => {
            childData.tagName = (tag && tag.name) ? tag.name : null
            childData.tagColor = (tag && tag.color) ? tag.color : null
          })

          entries[childKey] = childData
        })

        //success when fetch all tags done
        Promise.all(getTagPromises).then(() => {
          dispatch(actionSuccess(types.TIME_ENTRIES_FETCH_LIST, {payload: {
            entries
          }}))
          resolve()
        })

      })
    })
  }
}

export const remove = (uid, entryId) => {
  return function(dispatch) {
    dispatch(actionStart(types.TIME_ENTRIES_REMOVE, {payload: {entryId}}))
    
    const promise = firebase.database().ref('timeEntries/' + uid + '/' + entryId).remove()
    promise.then(function(){
      dispatch(actionSuccess(types.TIME_ENTRIES_REMOVE))
    })
    .catch(function(){
      dispatch(actionFailed(types.TIME_ENTRIES_REMOVE))
    })

  }
}