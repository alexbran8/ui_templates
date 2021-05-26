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

import axios from 'axios'
import config from '../config/config'
// import MdHome from 'react-icons/lib/md/blur-on'
// import MdPage from 'react-icons/lib/md/bookmark-outline'

export default class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      loginName: null,
      isOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    {console.log(localStorage)}
    if (localStorage.getItem('userEmail')) {
      return this.renderFull()
    } else {
      return this.renderLogin()
    }
  }

  renderFull () {
    return (
      <Navbar className="navbar" expand="sm">
        <Container>
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="/npt/#/schedule">
            {/* <MdHome className="icon-position-fix" />  */}
            Home Page
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavLink href="/npt/#/page1">
                {/* <MdPage className="icon-position-fix" /> Page 1 */}
              </NavLink>
              <NavLink href="/npt/#/schedule">
                {/* <MdPage className="icon-position-fix" /> Page 1 */}
              </NavLink>
              <NavLink href="/#/page2">
                {/* <MdPage className="icon-position-fix" /> Page 2 */}
              </NavLink>
              <NavLink href="/#/page3">
                {/* <MdPage className="icon-position-fix" /> Bad Link */}
              </NavLink>
            </Nav>
          </Collapse>
          <div className="navbar-text">
            <Nav navbar>
              <NavItem>
                <NavLink href="/npt/#/profile">
                  {console.log(localStorage.getItem('userEmail'))}
                  {localStorage.getItem('userEmail')} {this.state.lastName}
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Container>
      </Navbar>
    )
  }

  renderLogin () {
    return (
      <Navbar color="faded" className="navbar-expand-lg navbar-light bg-light">
        <Container>
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="/npt">
            {/* <MdHome className="icon-position-fix" />  */}
            Home Page
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar />
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
