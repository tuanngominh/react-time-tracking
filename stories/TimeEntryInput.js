import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {TimeEntryInput} from '../src/containers/TimeEntryInput';

const commonProps = {
  uid: 'user-id-123',
  onChangeText: action('onChangeText'),
  onChangeStartTime: action('onChangeStartTime'),
  onStop: action('onStop'),
  onStart: action('onStart'),
  onPull: action('onPull'),
  onRemove: action('onRemove'),
  onCreateTag: action('onCreateTag')  
}
storiesOf('Time Entry Input', module)
  .add('<TimeEntryInput /> - Not tracking', () => {
    return (
      <TimeEntryInput 
        {...commonProps}
      />
    )
  })
  .add('<TimeEntryInput /> - With loading indicator', () => {
    //marterial-ui's LinearProgress raise error with 'mode=indeterminate' in Jest env
    //so exclude this test
    if (process.env.NODE_ENV === 'test') {
      return (<div />)
    }
    return (
      <TimeEntryInput 
        {...commonProps}
        isFetching={true}
      />
    )
  })
  .add('<TimeEntryInput /> - Tracking', () => {
    let startTime = new Date()
    startTime.setSeconds(startTime.getSeconds() - 10)
    startTime = startTime.getTime()
    return (
      <TimeEntryInput 
        {...commonProps}
        text="time entry description" 
        startTime={startTime}
      />
    )
  })

