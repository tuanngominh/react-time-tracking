import React from 'react'
import {mount} from 'enzyme'

import {setupLocalStorage} from '../../test/utils'

import Logout from './Logout'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('<Logout />', () => {
  setupLocalStorage()

  it ('render', () => {

    const wrapper = mount(<Logout />)
    expect(wrapper.children().length).toBe(0)    
  })
})
