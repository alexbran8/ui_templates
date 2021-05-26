import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

import './css/app.scss'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/npt/" component={Home} />
          <Route exact path="/npt/profile" component={Profile} />
          <Route path="/npt/page1" component={Page1} />
          <Route path="/npt/page2" component={Page2} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
