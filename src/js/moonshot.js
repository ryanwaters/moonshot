import '../sass/app.scss'
import '../sass/foundation.css'

import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'



// Import css

// Import Components

import App from './components/app'
import NotFound from './components/404'
import CultivatorSignUp from './components/cultivator-sign-up'
import RetailerSignUp from './components/retailer-sign-up'
import Main from './components/main'
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main}/>
      <Route path='/cultivator-sign-up' component={CultivatorSignUp}/>
      <Route path='/retailer-sign-up' component={RetailerSignUp}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
)

render(routes, document.getElementById('root'))
