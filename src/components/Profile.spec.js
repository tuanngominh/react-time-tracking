import React from 'react'
import {mount} from 'enzyme'
import {setupWindowMatchMedia} from '../test/utils'

import Profile from './Profile'

describe('<Profile />', () => {
  it ('render', () => {
    setupWindowMatchMedia(true)
    
    const wrapper = mount(<Profile />)
    expect(wrapper.children().length).toBe(0)

  })

})
