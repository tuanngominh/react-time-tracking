import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TimeEntryInputForm from '../src/components/TimeEntryInputForm';

storiesOf('Time Entry Input', module)
  .add('<TimeEntryInputForm /> - Not tracking', () => {
    return (
      <TimeEntryInputForm 
      />
    )
  })
  .add('<TimeEntryInputForm /> - With loading indicator', () => {
    //marterial-ui's LinearProgress raise error with 'mode=indeterminate' in Jest env
    //so exclude this test
    if (process.env.NODE_ENV === 'test') {
      return (<div />)
    }
    return (
      <TimeEntryInputForm 
        isFetching={true}
      />
    )
  })
  .add('<TimeEntryInputForm /> - Tracking', () => {
    let startTime = new Date()
    startTime.setSeconds(startTime.getSeconds() - 10)
    startTime = startTime.getTime()
    return (
      <TimeEntryInputForm 
        text="time entry description" 
        startTime={startTime}
      />
    )
  })

