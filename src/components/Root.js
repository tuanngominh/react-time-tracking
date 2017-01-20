import React from 'react'
import App from './App'
import Profile from './Profile'
import Reports from './Reports'
import TimeTracker from './TimeTracker'

import Login from './auth/Login'
import Logout from './auth/Logout'

import {Router, Route, IndexRoute} from 'react-router'

import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'

// export const basename = '/vivid-trace'
export const basename = ''

const browserHistory = useRouterHistory(createHistory)({
  basename: basename
})

const Root = ({store}) => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TimeTracker} />
      <Route path='/reports' component={Reports} />
      <Route path='/profile' component={Profile} />
      <Route path='/login' component={Login} />
      <Route path='/logout' component={Logout} />
    </Route>
  </Router>
)

export default Root