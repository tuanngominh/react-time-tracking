import React from 'react'
import {mount} from 'enzyme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MobileNav from './MobileNav'

import IconButton from 'material-ui/IconButton'
import {ToolbarGroup} from 'material-ui/Toolbar'

import LoggedInMenu from './LoggedInMenu'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('<MobileNav />', () => {
  it ('render', () => {

    const wrapper = mount(<MuiThemeProvider><MobileNav /></MuiThemeProvider>)

    //FIXME: there are 2 IconButtons from MobilNav menu and 1 from LoggedInMenu
    //haven't found a way to only query the ones from MobileNav
    expect(wrapper.find(IconButton).length).toBe(3)
    expect(wrapper.find(LoggedInMenu).length).toBe(1)
  })  
})
