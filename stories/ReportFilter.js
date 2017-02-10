import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ReportFilter from '../src/components/ReportFilter';

storiesOf('<ReportFilter />', module)
  .add(' ', () => {
    return (
      <ReportFilter />
    )
  })
