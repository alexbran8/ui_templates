import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { config } from "../config";


export default OriginalComponent => {
  class MixedComponent extends Component {
    checkAuth() {
      if (!this.props.isAuth && !this.props.jwtToken) {
      console.log(`**(Nav) Checking local storage...`)
        if (localStorage.getItem('userEmail')) {
          const user = JSON.parse(localStorage.getItem('user'))
          console.log(`**(Nav) User found in local storage...`)
          this.setState({
            firstName: user.firstName || user.email,
            lastName: user.lastName,
            loginName: user.email,
            isAuth: true
          })
          this.props.history.push(config.baseLOCATION)
        } else {
          console.log(
            `**(Nav) User not found in local storage. Checking if user is logged in...`
          )
          Axios
            .get(config.baseURL + config.baseLOCATION + '/api/profile')
            .then(response => {
              console.log(`**(Nav) User is logged...`)
              console.log(response)
              const { firstName, lastName, email } = response.data.user
              localStorage.setItem('userEmail', email)
              this.setState({
                firstName: firstName || email,
                lastName: lastName,
                loginName: email
              })
              // window.location.href = '/nptbeta/'
            })
            .catch(err => {
              console.log(
                `**(Nav) User is not logged. Redirecting to login page...`
              )
              console.log(err)
              window.location.href = config.baseLOCATION + '/auth/login-adfs'
            })
        }
      }
      
    }
    componentDidMount() {
      this.checkAuth()
    }

    componentDidUpdate() {
      this.checkAuth()
    }

    render() {
      return <OriginalComponent {...this.props} />
    }
  }

  function MapStateToProps(state) {
    return {
      isAuth: state.auth.isAuthenticated,
      // jwtToken: state.auth.token
    }
  }
  return connect(MapStateToProps)(MixedComponent)
}
