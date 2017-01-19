import React from 'react'
import {mount} from 'enzyme'

import {setupWindowMatchMedia, setupLocalStorage} from '../test/utils'

import Root, {basename} from './Root'
import Reports from './Reports'
import TimeTracker from './TimeTracker'

jest.mock('./auth/auth', () => {
  return {
    login(email, pass, cb) {
      if (cb) cb(true)
      this.onChange(true)
    },
    loggedIn () {
      return true
    }
  }
})

describe('<Root />', () => {
  setupLocalStorage()
  
  it ('render', () => {
    setupWindowMatchMedia(true)

    const wrapper = mount(<Root />)
    expect(wrapper.children().length).toBeGreaterThan(0)
  })

  it ('menu navigation mobile', () => {
    //mobile viewport
    setupWindowMatchMedia(true)

    const wrapper = mount(<Root />)

    //Report page
    wrapper.find('a[href="' + basename + '/reports"]').simulate('click', { button: 0 })
    expect(wrapper.find(Reports).length).toBe(1)

    //Report page
    wrapper.find('a[href="' + basename + '/"]').simulate('click', { button: 0 })
    expect(wrapper.find(TimeTracker).length).toBe(1)    

    //FIXME: check Profile page, haven't found a way to open menu dropdown in material-ui
  })

  it ('menu navigation desktop', () => {
    //desktop viewport
    setupWindowMatchMedia(false)

    const wrapper = mount(<Root />)

    //Report page
    wrapper.find('a[href="' + basename + '/reports"]').simulate('click', { button: 0 })
    expect(wrapper.find(Reports).length).toBe(1)

    //Report page
    wrapper.find('a[href="' + basename + '/"]').simulate('click', { button: 0 })
    expect(wrapper.find(TimeTracker).length).toBe(1)    
  })  
  
})
