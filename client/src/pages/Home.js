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
          <h3>Home Pages</h3>
          <h5>Subtitle</h5>
          <NavLink href="/nptbeta/page1">
          </NavLink>
        </Container>
      </div>
    )
  }
}
