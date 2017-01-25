import React from 'react'
import {shallow} from 'enzyme'

import TimeTracker from './TimeTracker'

describe('<TimeTracker />', () => {
  it ('render', () => {
    const wrapper = shallow(<TimeTracker />)
    expect(wrapper.children().length).toBe(1)

  })

})
