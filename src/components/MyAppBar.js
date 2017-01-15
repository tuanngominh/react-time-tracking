import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MyAppBar extends Component {
  hanldeTap() {

  }
  render() {
    return (
      <AppBar 
        title="Vivid Trace" 
        iconElementLeft={
          <IconButton 
            tooltip="Time Tracking App" 
            tooltipPosition="bottom-right"
          >
            <FontIcon className="material-icons">alarm_on</FontIcon>
          </IconButton>
        }
        iconElementRight={<FlatButton label="Settings" />}
      />
    )
  }
}

export default MyAppBar