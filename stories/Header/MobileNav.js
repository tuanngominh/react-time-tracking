import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import {Provider} from 'react-redux'
import configureStore from '../../src/store/configureStore'

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MobileNav from '../../src/components/Header/MobileNav';

const appBar = getMuiTheme().appBar
const AddBackground = (story) => (
  <div style={{backgroundColor: appBar.color}}>
    {story()}
  </div>
)
storiesOf('<MobileNav />', module)
  .addDecorator(AddBackground)
  .add('Guess', () => (
    <MobileNav userLoggedIn={false} />
  ))
  .add('Logged in user', () => {
    const store = configureStore()
    return (
      <Provider store={store}>
        <MobileNav userLoggedIn={true} />
      </Provider>
    )
  });
