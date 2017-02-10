import React from 'react'
import TimeEntryInput from '../containers/TimeEntryInput'
import TimeEntryList from '../containers/TimeEntryList'

const TimeTracker = () => (
  <div className="row">
    <div className="col-xs-12
      col-sm-offset-2 col-sm-8
      col-md-offset-3 col-md-6
      col-lg-offset-3 col-lg-6
      ">
      <TimeEntryInput />
      <TimeEntryList />
    </div>
  </div>
)

export default TimeTracker