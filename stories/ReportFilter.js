import React from 'react';

import {Provider} from 'react-redux'
import configureStore from '../src/store/configureStore'

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ReportFilter from '../src/containers/Report/Filter';

storiesOf('<ReportFilter />', module)
  .add(' ', () => {
    const store = configureStore()
    return (
      <Provider store={store}>
        <ReportFilter />
      </Provider>
    )
  })
