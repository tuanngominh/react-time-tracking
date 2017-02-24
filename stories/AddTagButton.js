import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AddTagButton from '../src/components/AddTagButton'

storiesOf('Tag', module)
  .add('No tag selection', () => {
    return (
      <div style={{margin: 40}}>
        <AddTagButton onCreateTag={action('create-tag')}/>
      </div>
    )
  })
  .add('With tag selection', () => {
    return (
      <div style={{margin: 40}}>
        <AddTagButton onCreateTag={action('create-tag')} tagName="Tag name" tagColor="#ac725e" />
      </div>
    )
  })
