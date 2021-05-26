import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {config} from "./config"
import reduxThunk from 'redux-thunk'
import Axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.css'
// import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from './serviceWorker'
import App from './pages/App'

import Signin from './components/Signin'
import SignUp2  from './components/Signup'
import reducers from './redux/reducers/index'
import authGuard from './HOCs/authGuard'
import Main from './components/Main'
import Request from './components/Request'
import Approval from './components/Approval'
import Timeline from "./components/Timeline"
import TicTacToe from "./components/tictactoe"
import ExcelReader from "./components/ExcelReader"
import Tasks from './components/Tasks'
import ProjectList from './components/ProjectList'
import './main.scss'

import {baseLOCATION} from "./config"

const userName = localStorage.getItem('email'),
  role = JSON.parse(localStorage.getItem('permisiuni')),
  name = localStorage.getItem('name'),
  jwtToken = localStorage.getItem('token'),
  nokiaid = localStorage.getItem('nokiaid')
Axios.defaults.headers.common['Authorization'] = jwtToken


console.log(config.baseURL);


ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      {
        auth: {
          name: name ? name : '',
          userName: userName ? userName : '',
          role: role ? role : '',
          token: jwtToken,
          nokiaid: nokiaid,
          isAuthenticated: jwtToken ? true : false
        }
      },
      applyMiddleware(reduxThunk)
    )}
  >
    <BrowserRouter>
    <Switch>
      <App>
        TEST
        <Route exact path={baseLOCATION} component={Signin}  />
        <Route exact path={baseLOCATION +'/upload'} component={ExcelReader} />
        <Route exact path={baseLOCATION +"/signup" } component={SignUp2} />
        <Route exact path={baseLOCATION + "/schedule" } component={authGuard(Main)} />
        <Route exact path={baseLOCATION + "/request"} component={authGuard(Request)} />
        <Route exact path={baseLOCATION +"/approval"} component={authGuard(Approval)} />
        <Route exact path={baseLOCATION +"/tictactoe"} component={authGuard(TicTacToe)} />
        <Route exact path={baseLOCATION +"/timeline"} component={authGuard(Timeline)} />
        <Route exact path={baseLOCATION +'/resources' } component={ProjectList} />
        <Route exact path={baseLOCATION +'/tasks' } component={Tasks} />
      </App>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
