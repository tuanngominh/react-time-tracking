import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';

// custom style for components
import '../src/App.css';

// Needed for onTouchTap of material-ui.com components
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Add decorator to init Material UI theme
const WrapMuiThemeProvider = (story) => {
  //hack so hot reload still working
  try {
    injectTapEventPlugin();
  } catch (e) {

  }
    
  return (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  )
}

addDecorator(WrapMuiThemeProvider);

function loadStories() {
  require('../src/stories');
  require('../src/stories/Header/DesktopNav.js');
  require('../src/stories/Header/MobileNav.js');
  require('../src/stories/auth/Login.js');
}

configure(loadStories, module);


