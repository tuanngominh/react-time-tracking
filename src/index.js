import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

import history from './history'

import configureStore from './configureStore'
import {isUserLoggedIn} from './actions/isUserLoggedIn'

import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css'
import './index.css';

const store = configureStore()

store.dispatch(isUserLoggedIn())

const requireAuth = (nextState, replace) => {
  const state = store.getState()
  if (!state.auth.userLoggedIn) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })    
  }
}

ReactDOM.render(
  <Root store={store} history={history} requireAuth={requireAuth} />,
  document.getElementById('root')
);
