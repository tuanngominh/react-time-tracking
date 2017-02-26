import React from 'react'
import TimeEntryInput from '../containers/TimeEntryInput'
import TimeEntryListContainer from './TimeEntryListContainer'

const TimeTracker = () => (
  <div>
    <TimeEntryInput />
    <TimeEntryListContainer />
  </div>
)

export default TimeTracker