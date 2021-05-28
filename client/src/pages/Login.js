import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import Axios from 'axios'
import { config } from "../config"

export default class Login extends Component {
  loginToADFS (e) {
    // e.preventDefault()
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
      window.location.href = '/nptbeta/'
    })
    .catch(err => {
      console.log(
        `**(Nav) User is not logged. Redirecting to login page...`
      )
      console.log(err)
      window.location.href = '/nptbeta/auth/login-adfs'
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
        window.location.href = '/nptbeta/'
      })
    })
  }

  loginToFacebook (e) {
    e.preventDefault()
    window.location = '/auth/login-facebook'
  }

  loginToGoogle (e) {
    e.preventDefault()
    window.location = '/auth/login-google'
  }

  render () {
    return (
      <div>
        <Container className="login-box">
          <Button
            color="secondary"
            onClick={this.loginToADFS.bind(this)}
            className="cursor-pointer"
          >
            Login with ADFSssssssss
          </Button>{' '}
        </Container>
      </div>
    )
  }
}
