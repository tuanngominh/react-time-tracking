import React from 'react'
import {mount} from 'enzyme'

import Root from './Root'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
