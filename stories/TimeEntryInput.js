import React from 'react';

import {Provider} from 'react-redux'
import configureStore from '../src/store/configureStore'

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TimeEntryInput from '../src/containers/TimeEntryInput';

storiesOf('<TimeEntryInput />', module)
  .add('Tracking', () => {
    let startTime = new Date()
    startTime.setSeconds(startTime.getSeconds() - 10 - 3600)
    startTime = startTime.toJSON()

    const store = configureStore()
    return (
      <Provider store={store}>
        <TimeEntryInput 
          text="time entry description" 
          startTime={startTime}
          status="doing"
        />
      </Provider>
    )
  })
