import React from 'react'
import {mount} from 'enzyme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MobileNav from './MobileNav'

import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import {ToolbarGroup} from 'material-ui/Toolbar'

import LoggedInMenu from './LoggedInMenu'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('<MobileNav />', () => {
  it ('logged in', () => {

    const wrapper = mount(<MuiThemeProvider><MobileNav userLoggedIn={true}/></MuiThemeProvider>)

    console.log
    //FIXME: there are 2 IconButtons from MobilNav menu and 1 from LoggedInMenu
    //haven't found a way to only query the ones from MobileNav
    expect(wrapper.find(IconButton).length).toBe(3)
    expect(wrapper.find(LoggedInMenu).length).toBe(1)

    expect(wrapper.find(FlatButton).length).toBe(0)
  })

  it ('guest', () => {

    const wrapper = mount(<MuiThemeProvider><MobileNav userLoggedIn={false}/></MuiThemeProvider>)

    expect(wrapper.find(IconButton).length).toBe(0)
    expect(wrapper.find(LoggedInMenu).length).toBe(0)

    expect(wrapper.find(FlatButton).length).toBe(1)
  })

})
