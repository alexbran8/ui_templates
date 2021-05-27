import React from 'react'
import ReactDOM from 'react-dom'

import './main.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import Axios from 'axios'


import App from './pages/App'
import reducers from './redux/reducers/index'
import authGuard from './HOCs/authGuard'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import {config} from "./config"

import Main from './components/Main'
import Calendar from './components/Calendar.js'


import './css/app.scss'

const userName = localStorage.getItem('email'),
  role = JSON.parse(localStorage.getItem('permisiuni')),
  name = localStorage.getItem('name'),
  user = localStorage.getItem('userEmail'),
  jwtToken = localStorage.getItem('token'),
  nokiaid = localStorage.getItem('nokiaid')
Axios.defaults.headers.common['Authorization'] = jwtToken


ReactDOM.render(
      <Provider
    store={createStore(
      reducers,
      {
        auth: {
          name: name ? name : '',
          userName: userName ? userName : '',
          role: role ? role : '',
          user: user,
          token: jwtToken,
          nokiaid: nokiaid,
          isAuthenticated: user ? true : false
        }
      },
      applyMiddleware(reduxThunk)
    )}
  >
      <BrowserRouter>
        <Switch>
        <App>
          <Route  path="/npt/schedule" component={authGuard(Calendar)} />
          <Route  path="/npt/profile" component={Profile} />
          <Route  path="/npt/page1" component={Page1} />
          <Route  path="/npt/page2" component={Page2} />
          <Route  path="/login" component={Login} />
          <Route exact path="/npt/" component={Home} />
          {/* <Route component={NotFound} /> */}
          </App>
        </Switch>
      </BrowserRouter>
      </Provider>,
        document.querySelector('#root')
        )
    
  

