import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import PasswordModal from "./PasswordModal";
import { environment } from "../config";
import { baseLOCATION } from "../config";


import * as actions from "../actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.signOut = this.signOut.bind(this);
  }
  signOut() {
    this.props.SignOut();
  }

  togglePassword() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" expand="sm">
          <Link className="navbar-brand text-white" to="/schedule">
            <b> NOKIA</b> Planning Tool {environment}
          </Link>

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <ul className="navbar-nav text-center">
                {!this.props.isAuth ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to={ baseLOCATION + "/"}>
                        Sign In
                      </Link>
                    </li>
                  </>
                ) : null}

                {this.props.isAuth ? (
                  <>
                    {this.props.role === "L3" || this.props.role === "L2" ? (
                      <li className="nav-item">
                        <Link className="nav-link text-white" to={ baseLOCATION + "/approval" }>
                          Approval
                        </Link>
                      </li>
                    ) : null}
                    <li className="nav-item">
                      <Link className="nav-link text-white" to={ baseLOCATION + "/timeline"}>
                        App Timeline
                      </Link>
                    </li>
                  
                    <li className="nav-item">
                      <Link className="nav-link text-white" to={ baseLOCATION + "/schedule" }>
                        Scheduler
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Dropdown>
                          <Dropdown.Toggle
                            className="btn btn-secondary customButton"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Competences
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                          className="dropdownCustom text-white dropdown-menu-right text-center"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li className="nav-item">
                        <Link
                          className="nav-link text-white"
                          to={ baseLOCATION + "/resources" }
                        >
                          Competence Management
                        </Link>
                      </li>
                          </Dropdown.Menu>
                          </Dropdown>
                        </li>
                    <li className="nav-item">
                      <Dropdown>
                          <Dropdown.Toggle
                            className="btn btn-secondary customButton"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Planning
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                          className="dropdownCustom text-white dropdown-menu-right text-center"
                          aria-labelledby="dropdownMenuButton"
                        >
                          {this.props.role === "L3" || this.props.role === "L2" ? (
                          <li className="nav-item">
                        <Link
                          className="nav-link text-white"
                          to={ baseLOCATION + "/upload"}
                        >
                          Upload Planning
                        </Link>
                      </li>
                          ) : null }
                      <li className="nav-item">
                      <Link className="nav-link text-white" to={ baseLOCATION + "/request"}>
                        Add
                      </Link>
                    </li>
                      <li>
                      <Link
                          className="nav-link text-white"
                          to={ baseLOCATION + "/tasks"}
                        >
                          Task List
                        </Link>
                      </li>
                          </Dropdown.Menu>
                          </Dropdown>
                        </li>
                    {/* <li className="nav-item"> */}
                      <Dropdown>
                        <Dropdown.Toggle
                          className="btn btn-secondary customButton"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {console.log(this.props)}
                          {this.props.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdownCustom dropdown-menu-right text-center"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <>
                          {this.props.role === "L3" ? (
                                <Link
                                className="dropdown-item text-white dropitemCustom nav-link"
                                to={ baseLOCATION + "/signup"} 
                              >
                                Add user
                              </Link>
                            )
                            : null }
                            <button
                              className="dropdown-item text-white dropitemCustom nav-link"
                              onClick={() => this.togglePassword()}
                            >
                              Change password
                            </button>
                            {this.state.show ? (
                              <PasswordModal
                                nokiaid={this.props.nokiaid}
                                close={() => this.togglePassword()}
                              />
                            ) : null}
                            <Link
                              className="dropdown-item text-white dropitemCustom nav-link"
                              to={ baseLOCATION + "/"} 
                              onClick={this.signOut}
                            >
                              Sign Out
                            </Link>
                          
                          </>
                        </Dropdown.Menu>
                      </Dropdown>
                    {/* </li> */}
                  </>
                ) : null}
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
function MapStateToProps(state) {
  return {
    role: state.auth.role,
    email: state.auth.userName,
    isAuth: state.auth.isAuthenticated,
    name: state.auth.name,
    nokiaid: state.auth.nokiaid
  };
}

export default connect(MapStateToProps, actions)(Header);
