import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TimeEntryList from '../src/components/TimeEntryList';

storiesOf('<TimeEntryList />', module)
  .add('render', () => {
    return (
      <TimeEntryList 
      />
    )
  })
