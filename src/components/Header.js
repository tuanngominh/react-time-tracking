import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable'

import DesktopNav from './Header/DesktopNav'
import MobileNav from './Header/MobileNav'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {type:'desktop'};
  }

  componentDidMount() {
    const checkMediaQuery = () => {
      const type = window.matchMedia("(max-width: 550px)").matches ? 'mobile': 'desktop';
      if (type !== this.state.type) {
        this.setState({type});
      }
    };

    window.addEventListener('resize', checkMediaQuery);
    checkMediaQuery();
  }

  render() {
    const appBar = this.props.muiTheme.appBar
    return (
      <Toolbar style={{
        backgroundColor: appBar.color   
      }}>
        <ToolbarGroup firstChild={true}> 
          <FontIcon className="material-icons" style={{
            color: appBar.textColor
          }}>alarm_on</FontIcon>
          <ToolbarTitle text="Vivid Trace" style={{
            color: appBar.textColor
          }}/>
        </ToolbarGroup>
        { (this.state.type === 'desktop') ? <DesktopNav /> : <MobileNav /> }
      </Toolbar>
    );
  }
}

export default muiThemeable()(Header)