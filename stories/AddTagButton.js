import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AddTagButton from '../src/components/AddTagButton'

const tags = [
  {name: 'tag 1', color: '#ac725e'},
  {name: 'tag 2', color: '#8f8f8f'}
]

let manyTags = []
for (let i = 0; i < 30; i++) {
  manyTags.push({
    key: i,
    name: 'tag ' + i,
    color: ((i % 2) === 0) ? 'black': 'blue'
  })
}

storiesOf('Tag', module)
  .add('No tag selection', () => {
    return (
      <div style={{margin: 40}}>
        <AddTagButton 
          onCreateTag={action('create-tag')} 
          onFetchList={action('on fetch list')}
          tags={tags}
        />
      </div>
    )
  })
  .add('No tag selection, no existed tag', () => {
    return (
      <div style={{margin: 40}}>
        <AddTagButton 
          onCreateTag={action('create-tag')} 
          onFetchList={action('on fetch list')}
          tags={[]}
        />
      </div>
    )
  })
  .add('With tag selection', () => {
    return (
      <div style={{margin: 40}}>
        <AddTagButton 
          onCreateTag={action('create-tag')} 
          onFetchList={action('on fetch list')}
          tags={tags}
          tagName="Tag name" 
          tagColor="#ac725e" 
        />
      </div>
    )
  })
  .add('Show scroll bar when there are many existed tags', () => {
    return (
      <div style={{margin: 40}}>
        <AddTagButton 
          onCreateTag={action('create-tag')} 
          onFetchList={action('on fetch list')}
          tags={manyTags}
          tagName="Tag name" 
          tagColor="#ac725e" 
        />
      </div>
    )
  })
