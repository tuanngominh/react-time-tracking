import React, { Component } from 'react';

import auth from './auth/auth'
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: auth.loggedIn()
    }
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn
    })
  }

  componentWillMount() {
    auth.onChange = this.updateAuth.bind(this)
    auth.login()
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header userLoggedIn={this.state.loggedIn} />
          {this.props.children}
        </div>
      </MuiThemeProvider>  
    ) 
  }
}

export default App;
