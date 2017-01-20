import {withRouter} from 'react-router'
import React, {Component} from 'react'
import auth from './auth'

import Paper from 'material-ui/Paper'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends Component {

  handleInvalidSubmit = (data) => {
    console.error('Form error:', data)
  }

  handleSubmit = (data, reset, invalidate) => {
    auth.login(data.email, data.password, (loggedIn) => {
      if (!loggedIn) {
        invalidate({
          password: "Email or password is not correct"
        })
        return this.setState({ 
          error: true,
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
      <Paper style={{padding: 50, marginTop: 30}}>
        <Formsy.Form
          onValidSubmit={this.handleSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
        >
          <FormsyText
            name="email"
            defaultValue="joe@example.com"
            hintText="test account: joe@example.com"
            floatingLabelText="Email address"
            floatingLabelFixed={true} 
            type="email"
            validations="isEmail"
            validationError="This is not an email"
            required
          /><br />
          <FormsyText
            name="password"
            hintText="test account: password1"
            floatingLabelText="Password"
            floatingLabelFixed={true}
            type="password"
            required
            validationError="Password is required"
          /><br />
          <RaisedButton 
            label="Login" 
            primary={true} 
            type="submit"
          />
        </Formsy.Form>
      </Paper>
    )
  }
}


export default withRouter(Login)