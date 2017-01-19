import React from 'react'
import {mount} from 'enzyme'
import {setupWindowMatchMedia, setupLocalStorage} from '../test/utils'

import App from './App'

describe('<App />', () => {
  it ('render', () => {
    setupWindowMatchMedia(true)
    setupLocalStorage()
    
    const wrapper = mount(<App />)
    expect(wrapper.children().length).toBeGreaterThan(0)

  })

})
