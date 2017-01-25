import React from 'react'
import {shallow} from 'enzyme'

import Reports from './Reports'

describe('<Reports />', () => {
  it ('render', () => {
    //setup window.matchMedia
    window.matchMedia = () => {
      return true
    }
    const wrapper = shallow(<Reports />)
    expect(wrapper.children().length).toBe(1)

  })

})
