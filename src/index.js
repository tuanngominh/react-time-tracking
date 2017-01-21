import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import history from './history'
import configureStore from './configureStore'

import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css'
import './index.css';

const store = configureStore()

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
