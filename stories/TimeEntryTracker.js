import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TimeEntryTracker from '../src/components/TimeEntryTracker';

storiesOf('<TimeEntryTracker />', module)
  .add('Time in second', () => {
    let startTime = new Date()
    startTime.setSeconds(startTime.getSeconds() - 10)
    startTime = startTime.toJSON()
    return (
      <TimeEntryTracker 
        text="time entry description" 
        startTime={startTime}
        status="doing"
      />
    )
  })
  .add('Time in minute', () => {
    let startTime = new Date()
    startTime.setSeconds(startTime.getSeconds() - 10 - 60)
    startTime = startTime.toJSON()
    return (
      <TimeEntryTracker 
        text="time entry description" 
        startTime={startTime}
        status="doing"
      />
    )
  })
  .add('Time in hour', () => {
    let startTime = new Date()
    startTime.setSeconds(startTime.getSeconds() - 10 - 3600)
    startTime = startTime.toJSON()
    return (
      <TimeEntryTracker 
        text="time entry description" 
        startTime={startTime}
        status="doing"
      />
    )
  })
