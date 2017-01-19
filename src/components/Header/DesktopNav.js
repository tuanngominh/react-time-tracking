import React, {PropTypes} from 'react'

import FlatButton from 'material-ui/FlatButton'
import {ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar'
import muiThemeable from 'material-ui/styles/muiThemeable'

import {Link} from 'react-router'
import { withRouter } from 'react-router'

import LoggedInMenu from './LoggedInMenu'
import {getMenuStyle, getActiveStyle} from './utils'

const DesktopNav = (props) => {
  const appBar = props.muiTheme.appBar
  const pathname = (props.location && props.location.pathname) ? props.location.pathname : '';
  const {userLoggedIn = false} = props

  return (
      userLoggedIn
      ?    
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
      :
      <ToolbarGroup>  
        <FlatButton 
          label="Login" 
          style={getActiveStyle(appBar)} 
          containerElement={<Link to="/login"/>} 
        />
      </ToolbarGroup>    
)}

DesktopNav.propTypes = {
  userLoggedIn: PropTypes.bool
}

export default muiThemeable()(withRouter(DesktopNav))