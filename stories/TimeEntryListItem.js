import React from 'react';

import {Provider} from 'react-redux'
import configureStore from '../src/configureStore'

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Table, TableBody} from 'material-ui/Table'
import TimeEntryListItem from '../src/containers/TimeEntryListItem';

storiesOf('<TimeEntryListItem />', module)
  .add('render', () => {
    const store = configureStore()
    return (
      <Provider store={store}>
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TimeEntryListItem text="entry description sample" id={1} startTime="2017-02-06T03:18:05.672Z" endTime="2017-02-06T04:18:05.672Z"/>
          </TableBody>
        </Table>
      </Provider>
    )
  })
