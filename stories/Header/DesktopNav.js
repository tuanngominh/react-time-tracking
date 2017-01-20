import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import DesktopNav from '../../src/components/Header/DesktopNav';

const appBar = getMuiTheme().appBar
const AddBackground = (story) => (
  <div style={{backgroundColor: appBar.color}}>
    {story()}
  </div>
)
storiesOf('<DesktopNav />', module)
  .addDecorator(AddBackground)
  .add('Guess', () => (
    <DesktopNav userLoggedIn={false} />
  ))
  .add('Logged in user', () => (
    <DesktopNav userLoggedIn={true} />
  ));
