import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {Link} from 'react-router'

const Homepage = (props) => (
  <div style={{marginTop: 50}}>
    {
      props.auth.isFetching 
      ? 
      <div>
        Checking user login status <RefreshIndicator
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
      </div>
      : 
      (props.auth.userLoggedIn) 
        ? 
        <div>
          Hi {props.auth.user.email}, <br/>
          <RaisedButton 
            label="Start tracking time" 
            primary={true}
            containerElement={<Link to="/tracker" />} 
          />
        </div>
        :
        <div>
          Please login to start tracking your time <br/>
          <RaisedButton 
            label="Login" 
            primary={true}
            containerElement={<Link to="/login" />} 
          />
        </div>
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Homepage)