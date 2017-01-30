import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TimeEntryInput from '../src/components/TimeEntryInput';

storiesOf('<TimeEntryInput />', module)
  .add('Tracking', () => {
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
