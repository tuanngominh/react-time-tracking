import React from 'react'
import {mount} from 'enzyme'

import Profile from './Profile'

describe('<Profile />', () => {
  it ('render', () => {
    //setup window.matchMedia
    window.matchMedia = () => {
      return true
    }
    const wrapper = mount(<Profile />)
    expect(wrapper.children().length).toBe(0)

  })

})
