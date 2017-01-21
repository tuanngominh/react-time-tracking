import React from 'react'

import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import Profile from './components/Profile'
import Reports from './components/Reports'
import TimeTracker from './components/TimeTracker'

import Login from './components/auth/Login'
import Logout from './components/auth/Logout'

export default <Route path='/' component={App}>
  <IndexRoute component={TimeTracker} />
  <Route path='/reports' component={Reports} />
  <Route path='/profile' component={Profile} />
  <Route path='/login' component={Login} />
  <Route path='/logout' component={Logout} />
</Route>