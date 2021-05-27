import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap'

import { config } from "../config"
import { appversion } from "../config"

import { Link, NavLink } from "react-router-dom"
import axios from 'axios'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      loginName: null,
      isOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    { console.log(localStorage) }
    if (localStorage.getItem('userEmail')) {
      return this.renderFull()
    } else {
      return this.renderLogin()
    }
  }

  renderFull() {
    return (
      <Navbar className="navbar" expand="sm">
        <Link className="navbar-brand text-white" to={config.baseLOCATION}>
          <b>NOKIA</b> {appversion}
        </Link>

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to={config.baseLOCATION + "/schedule"}
                >
                  Schedule
                      </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to={config.baseLOCATION + "/schedule"}
                >
                  Schedule
                      </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to={config.baseLOCATION + "/schedule"}
                >
                  Schedule
                      </Link>
              </li>
            </ul>
          </Nav>
        </Collapse>
        <div className="navbar-text">
          <Nav navbar>
            <NavItem>
              <ul className="navbar-nav text-center">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to={config.baseLOCATION + "/profile"}
                  >
                    {localStorage.getItem('userEmail')}
                  </Link>
                </li>
              </ul>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }

  renderLogin() {
    return (
      <Navbar color="faded" className="navbar-expand-lg navbar-light bg-light">
        <Container>
          <NavbarToggler onClick={this.toggle} />
          <Link className="navbar-brand text-white" to={config.baseLOCATION}>
            <b>NOKIA</b> {appversion}
          </Link>
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to={config.baseLOCATION + "/schedule"}
              >
                Schedule
                      </Link>
            </li>
          </ul>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar />
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
