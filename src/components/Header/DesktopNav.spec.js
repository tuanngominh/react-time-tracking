import React from 'react'
import {mount} from 'enzyme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DesktopNav from './DesktopNav'

import FlatButton from 'material-ui/FlatButton'
import LoggedInMenu from './LoggedInMenu'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('<DesktopNav />', () => {
  it ('logged in', () => {

    const wrapper = mount(<MuiThemeProvider><DesktopNav userLoggedIn={true} /></MuiThemeProvider>)
    //two menu buttons
    expect(wrapper.find(FlatButton).length).toBe(2)
    expect(wrapper.find(LoggedInMenu).length).toBe(1)
    
  })

  it ('guest', () => {

    const wrapper = mount(<MuiThemeProvider><DesktopNav userLoggedIn={false} /></MuiThemeProvider>)

    //1 login button
    expect(wrapper.find(FlatButton).length).toBe(1)
    expect(wrapper.find(LoggedInMenu).length).toBe(0)
    
  })

})
