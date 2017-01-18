import React from 'react'
import App from './App'
import Profile from './Profile'
import Reports from './Reports'
import TimeTracker from './TimeTracker'

import {Router, Route, IndexRoute, browserHistory} from 'react-router'

const Root = ({store}) => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TimeTracker} />
      <Route path='/reports' component={Reports} />
      <Route path='/profile' component={Profile} />
    </Route>
  </Router>
)

export default Root