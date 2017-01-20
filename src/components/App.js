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
          <div className="row">
            <div className="col-xs-12
                col-sm-offset-2 col-sm-8
                col-md-offset-3 col-md-6
                col-lg-offset-4 col-lg-4
                ">
              {this.props.children}
            </div>
          </div>          
        </div>
      </MuiThemeProvider>  
    ) 
  }
}

export default App;
