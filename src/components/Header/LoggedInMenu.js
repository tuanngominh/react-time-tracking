import React from 'react'

import {Link} from 'react-router'

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import muiThemeable from 'material-ui/styles/muiThemeable'

const LoggedInMenu = (props) => {
  const appBar = props.muiTheme.appBar
  return (
    <IconMenu
      iconStyle={{color: appBar.textColor}}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Profile" containerElement={<Link to="/profile" />} />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  )
}

export default muiThemeable()(LoggedInMenu)