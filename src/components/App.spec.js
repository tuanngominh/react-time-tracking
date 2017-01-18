import React from 'react'
import {mount} from 'enzyme'
import {setupWindowMatchMedia} from '../test/utils'

import App from './App'

describe('<App />', () => {
  it ('render', () => {
    setupWindowMatchMedia(true)
    
    const wrapper = mount(<App />)
    expect(wrapper.children().length).toBeGreaterThan(0)

  })

})
