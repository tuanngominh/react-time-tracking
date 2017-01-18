import React from 'react'
import {mount} from 'enzyme'

import Reports from './Reports'

describe('<Reports />', () => {
  it ('render', () => {
    //setup window.matchMedia
    window.matchMedia = () => {
      return true
    }
    const wrapper = mount(<Reports />)
    expect(wrapper.children().length).toBe(0)

  })

})
