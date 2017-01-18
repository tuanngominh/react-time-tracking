import React from 'react'
import {mount} from 'enzyme'

import App from './App'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('<App />', () => {
  it ('render', () => {
    //setup window.matchMedia
    window.matchMedia = () => {
      return true
    }
    const wrapper = mount(<App />)
    expect(wrapper.children().length).toBeGreaterThan(0)

  })

})
