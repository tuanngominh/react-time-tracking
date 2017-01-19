import {withRouter} from 'react-router'
import React, {Component} from 'react'
import auth from './auth'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      passwordErrorText: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn) {        
        return this.setState({ 
          error: true,
          passwordErrorText: "Bad login information"
        })
      }

      const { location } = this.props
      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname)
      } else {
        this.props.router.replace('/')
      }
    })
  }

  render() {
    return (
      <div>
        <TextField
          defaultValue="joe@example.com"
          hintText="email@address.com"
          floatingLabelText="Email address"
          floatingLabelFixed={true} 
          type="email"
        /><br />
        <TextField
          hintText="test account pass: password1"
          floatingLabelText="Password"
          floatingLabelFixed={true}
          type="password"
          errorText={this.state.passwordErrorText}
        /><br />
        <RaisedButton label="Login" primary={true} onClick={this.handleSubmit}/>
      </div>
    )
  }
}


export default withRouter(Login)