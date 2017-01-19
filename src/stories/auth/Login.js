import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Login from '../../components/auth/Login';

storiesOf('<Login />', module)
  .add('', () => (
    <div style={{margin: 40}}>
      <Login />
    </div>
  ))
