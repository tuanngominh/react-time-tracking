import React from 'react'

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable'

import {Link} from 'react-router'
import { withRouter } from 'react-router'

import LoggedInMenu from './LoggedInMenu'
import {getMenuStyle} from './utils'

const MobileNav = (props) => {
  const appBar = props.muiTheme.appBar
  const pathname = (props.location && props.location.pathname) ? props.location.pathname : '';

  return (
    <ToolbarGroup>
      <ToolbarSeparator />
      <IconButton 
        tooltip="Tracker" 
        containerElement={<Link to="/"/>} 
        iconStyle={getMenuStyle(appBar, pathname, '/')} 
        tooltipPosition='bottom-center'
        >
        <FontIcon className="material-icons">play_arrow</FontIcon>
      </IconButton>
      <IconButton 
        tooltip="Reports" 
        containerElement={<Link to="/reports"/>} 
        iconStyle={getMenuStyle(appBar, pathname, '/reports')} 
        tooltipPosition='bottom-center'
        >
        <FontIcon className="material-icons">show_chart</FontIcon>
      </IconButton>
      <ToolbarSeparator />
      <LoggedInMenu iconStyle={{
        color: appBar.textColor
      }}/>
    </ToolbarGroup>
  )
}

export default muiThemeable()(withRouter(MobileNav))