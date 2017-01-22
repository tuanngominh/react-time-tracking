import {withRouter} from 'react-router'
import React, {Component} from 'react'

import {connect} from 'react-redux'
import {register} from '../../actions/register'

import Paper from 'material-ui/Paper'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import RaisedButton from 'material-ui/RaisedButton'
import RefreshIndicator from 'material-ui/RefreshIndicator';

class Register extends Component {

  handleInvalidSubmit = (data) => {
    console.error('Form error:', data)
  }

  componentWillReceiveProps(nextProps){
    const {status, errorMessage} = nextProps.auth
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

  handleSubmit = (data, reset, invalidate) => {
    const {dispatch} = this.props
    dispatch(register(data.email, data.password))
  }

  render() {
    return (
      <Paper style={{padding: 50, marginTop: 30}}>
        <Formsy.Form
          onValidSubmit={this.handleSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
          ref={(node) => this.form = node}
        >
          <FormsyText
            name="email"
            hintText="youremail@address.com"
            floatingLabelText="Email address"
            floatingLabelFixed={true} 
            type="email"
            validations="isEmail"
            validationError="This is not an email"
            required
          /><br />
          <FormsyText
            name="password"
            hintText="enter your password"
            floatingLabelText="Password"
            floatingLabelFixed={true}
            type="password"
            required
            validationError="Password is required"
          /><br />
          <RaisedButton 
            label="Register" 
            primary={true} 
            type="submit"
          />
          { this.props.auth.isFetching ? <RefreshIndicator
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
    auth: state.auth
  }
}

export default connect(mapStateToProps)(withRouter(Register))