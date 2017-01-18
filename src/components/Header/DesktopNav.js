import React from 'react'

import FlatButton from 'material-ui/FlatButton'
import {ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar'
import muiThemeable from 'material-ui/styles/muiThemeable'

import {Link} from 'react-router'
import { withRouter } from 'react-router'

import LoggedInMenu from './LoggedInMenu'
import {getMenuStyle} from './utils'

const DesktopNav = (props) => {
  const appBar = props.muiTheme.appBar
  const pathname = (props.location && props.location.pathname) ? props.location.pathname : '';

  return (
    <ToolbarGroup>
      <ToolbarSeparator />
      <FlatButton 
        label="Tracker" 
        containerElement={<Link to="/"/>}  
        style={getMenuStyle(appBar, pathname, '/')} />
      <FlatButton 
        label="Reports" 
        containerElement={<Link to="/reports"/>}  
        style={getMenuStyle(appBar, pathname, '/reports')} />
      <ToolbarSeparator/>
      <LoggedInMenu iconStyle={{
        color: appBar.textColor
      }}/>
    </ToolbarGroup>
)}

export default muiThemeable()(withRouter(DesktopNav))