import {withRouter} from 'react-router'
import React, {Component} from 'react'

import {login} from '../../actions'
import {connect} from 'react-redux'

import Paper from 'material-ui/Paper'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import RaisedButton from 'material-ui/RaisedButton'
import RefreshIndicator from 'material-ui/RefreshIndicator';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      validationErrors: {}
    }
  }

  componentWillReceiveProps(nextProps){
    const {status, errorMessage} = nextProps.state
    if (status === 'success') {
      const { location } = this.props
      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname)
      } else {
        this.props.router.replace('/')
      }      
    } else {
      this.form.updateInputsWithError({password: errorMessage})
    }
  }

  handleInvalidSubmit = (data) => {
    console.error('Form error:', data)
  }

  handleSubmit = (data, reset, invalidate) => {
    const {dispatch} = this.props
    dispatch(login(data.email, data.password))
  }

  render() {
    return (
      <Paper style={{padding: 50, marginTop: 30}}>
        <Formsy.Form
          ref={(node) => this.form = node}
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
          ></RaisedButton>  
          { this.props.state.isFetching ? <RefreshIndicator
              loadingColor="#FF9800"
              status="loading"
              size={30}
              left={10}
              top={7}
              style={{
                display: 'inline-block',
                position: 'relative'
              }}
            />
            :
            ''
          }
        </Formsy.Form>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(withRouter(Login))