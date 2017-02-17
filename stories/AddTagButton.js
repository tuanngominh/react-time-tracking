import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AddTagButton from '../src/components/AddTagButton'

storiesOf('Tag', module)
  .add('<AddTagButton />', () => {
    return (
      <div style={{margin: 40}}>
        <AddTagButton />
      </div>
    )
  })
