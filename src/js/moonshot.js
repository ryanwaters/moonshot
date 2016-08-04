import React from 'react';
import { render } from 'react-dom';

import { Router, Route, Link, browserHistory} from 'react-router';



// Import css

// Import Components

import App from './components/app';
import NotFound from './components/404';
import CultivatorSignUp from './components/cultivator-sign-up';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/cultivator-sign-up' component={CultivatorSignUp}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
)

render(routes, document.getElementById('root'));
