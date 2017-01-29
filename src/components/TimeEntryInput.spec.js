import React from 'react'
import {shallow} from 'enzyme'

import TimeEntryInput from './TimeEntryInput'

describe('<TimeEntryInput />', () => {
  it ('render', () => {
    const wrapper = shallow(<TimeEntryInput />)
    expect(wrapper.children().length).toBeGreaterThan(0)

  })

})
