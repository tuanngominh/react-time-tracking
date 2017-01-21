import React, {PropTypes} from 'react'

import {Router} from 'react-router'
import routes from '../routes'

const Root = ({history}) => (
  <Router history={history} routes={routes}>
  </Router>
)

Root.propTypes = {
  history: PropTypes.object.isRequired
}

export default Root