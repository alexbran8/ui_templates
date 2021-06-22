import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'


export default class Home extends Component {
  render () {
    return (
      <div>

        <Container className="main-container">
          <h3>Welcome to Nokia EcoSystem Web Application</h3>
          <h5>Please bare in mind that this web application is still under development...</h5>
          <NavLink href="/ecosystem/page1">
          </NavLink>
        </Container>
      </div>
    )
  }
}
