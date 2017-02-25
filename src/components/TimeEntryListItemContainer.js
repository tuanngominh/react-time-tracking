import React, {Component} from 'react'
import {connect} from 'react-redux'
import {get} from 'lodash'

import {remove} from '../actions/timeEntries'

import TimeEntryListItem from './TimeEntryListItem'


const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (uid, entryId) => {
      dispatch(remove(uid, entryId))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    uid: get(state,"auth.user.uid", null)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntryListItem)
