import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import {Provider} from 'react-redux'
import configureStore from '../../src/store/configureStore'

import Login from '../../src/containers/auth/Login';

storiesOf('<Login />', module)
  .add('', () => {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div style={{margin: 40}}>
          <Login />
        </div>
      </Provider>
    )
  })
