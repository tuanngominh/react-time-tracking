import React from 'react'
import {mount} from 'enzyme'

import TimeTracker from './TimeTracker'

describe('<TimeTracker />', () => {
  it ('render', () => {
    const wrapper = mount(<TimeTracker />)
    expect(wrapper.children().length).toBe(0)

  })

})
