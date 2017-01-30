import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TimeEntryInputForm from '../src/components/TimeEntryInputForm';

storiesOf('<TimeEntryInputForm />', module)
  .add('Tracking', () => {
    let startTime = new Date()
    startTime.setSeconds(startTime.getSeconds() - 10)
    startTime = startTime.toJSON()
    return (
      <TimeEntryInputForm 
        text="time entry description" 
        duration="10:10 PM"
      />
    )
  })
  .add('Not tracking', () => {
    let startTime = new Date()
    startTime.setSeconds(startTime.getSeconds() - 10 - 60)
    startTime = startTime.toJSON()
    return (
      <TimeEntryInputForm 
      />
    )
  })
