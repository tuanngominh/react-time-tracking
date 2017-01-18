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
  it ('render', () => {

    const wrapper = mount(<MuiThemeProvider><DesktopNav /></MuiThemeProvider>)

    expect(wrapper.find(FlatButton).length).toBe(2)    
    expect(wrapper.find(LoggedInMenu).length).toBe(1)
  })  
})
