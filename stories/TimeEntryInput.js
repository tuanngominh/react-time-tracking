import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TimeEntryInput from '../src/components/TimeEntryInput';

storiesOf('<TimeEntryInput />', module)
  .add('Time in second', () => {
    let startTime = new Date()
    startTime.setSeconds(startTime.getSeconds() - 10)
    startTime = startTime.toJSON()
    return (
      <TimeEntryInput 
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
      <TimeEntryInput 
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
      <TimeEntryInput 
        text="time entry description" 
        startTime={startTime}
        status="doing"
      />
    )
  })
