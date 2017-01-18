import React from 'react'
import {mount} from 'enzyme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar} from 'material-ui/Toolbar';

import Header from './Header'
import DesktopNav from './Header/DesktopNav'
import MobileNav from './Header/MobileNav'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('<Header />', () => {
  it ('render desktop', () => {
    //setup window.matchMedia
    //desktop viewport case
    window.matchMedia = () => {
      return {
        matches: false
      }
    }
    const wrapper = mount(<MuiThemeProvider><Header /></MuiThemeProvider>)
    
    expect(wrapper.children().length).toBeGreaterThan(0)
    expect(wrapper.find(DesktopNav).length).toBe(1)

  })

  it ('render mobile', () => {
    //setup window.matchMedia
    window.matchMedia = () => {
      return {
        matches: true
      }
    }
    const wrapper = mount(<MuiThemeProvider><Header /></MuiThemeProvider>)
    expect(wrapper.children().length).toBeGreaterThan(0)
    expect(wrapper.find(MobileNav).length).toBe(1)
  })


})
