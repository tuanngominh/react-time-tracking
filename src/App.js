import React, { Component } from 'react';
import MyAppBar from './components/MyAppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MyAppBar />
      </MuiThemeProvider>  
    ) 
  }
}

export default App;
