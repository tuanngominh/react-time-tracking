import React from 'react'
import {mount} from 'enzyme'

import Root from './Root'

describe('<Root />', () => {
  it ('render', () => {
    //setup window.matchMedia
    window.matchMedia = () => {
      return true
    }
    const wrapper = mount(<Root />)
    expect(wrapper.children().length).toBeGreaterThan(0)

  })
  
})
