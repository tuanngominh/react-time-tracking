import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import history from './history'

import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css'
import './index.css';


ReactDOM.render(
  <Root history={history} />,
  document.getElementById('root')
);
