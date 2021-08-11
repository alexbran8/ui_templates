import { Link } from "react-router-dom";
import "./Header.scss"
import React, { useEffect, useState } from "react";
import { config } from "../config"
import { useSelector, useDispatch } from "react-redux";
import { AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR } from '../redux/reducers/types'
import { ExitToApp, ThreeDRotation } from '@material-ui/icons';

import {
  Collapse,
  Navbar,
  Button,
  Nav,
  UncontrolledPopover, PopoverHeader, PopoverBody
} from 'reactstrap'
import { withTranslation } from "react-i18next";
import "../services/i18n";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";



const PopoverContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PopoverHeader>NOKIA {config.AppName} WEB APPLICATION {config.appVersion}</PopoverHeader>
      <PopoverBody>
        LATEST UPDATES:
      </PopoverBody>
    </>
  );
}
  
export const Header = () => {
  const user = useSelector((state) => ({ auth: state.auth }));
  const [state, setState] = useState();

  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const dispatch = useDispatch()

 useEffect(() => {
     fetch(config.baseURL + config.baseLOCATION + "/auth/login/success/", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          }
        })
          .then(response => {
            if (response.status === 200) return response.json();
            throw new Error("failed to authenticate user");
          })
          .then(responseJson => {
            console.log(responseJson)
            setState({
              authenticated: true,
              user: responseJson.user
            }
            );
            sessionStorage.setItem('exp', responseJson.user.exp)
            sessionStorage.setItem('userEmail', responseJson.user.email)
            sessionStorage.setItem('name', responseJson.user.first_name)
            sessionStorage.setItem('token', responseJson.user.id)
            sessionStorage.setItem('roles', responseJson.user.roles)    
            dispatch({
              type: AUTH_SIGN_IN,
              payload: {
                role: responseJson.user.roles,
                name: responseJson.user.first_name,
                email: responseJson.user.email,
                token: responseJson.user.id
              }}
            )   
          }
          )
          .catch(error => {
            setState({
              authenticated: false,
              error: "Failed to authenticate user"
            });
            console.log(error)
          });
 },[])

    const _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    window.open(config.baseURL + config.baseLOCATION + "/auth/azure", "_self");
  };

 const  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open(config.baseURL + config.baseLOCATION + "/auth/logout", "_self");
    sessionStorage.removeItem('exp')
    sessionStorage.removeItem('userEmail')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('roles')
    props.handleNotAuthenticated();
  };
 const  _handleNotAuthenticated = () => {
    setState({ authenticated: false });
  };
    return (
      <Navbar className="navbar sticky-top" expand="sm">
        <Link className="navbar-brand text-white" id="navbar-brand" to={config.baseLOCATION + "/"}>
          <div className="navbar-brand"><b>NOKIA</b> {config.AppName} {user.auth.type === 'student' ? <div className="header-title"> {t("navbar.students")} </div>: null }</div>
         
        </Link>
        <Collapse 
        // isOpen={isOpen} 
        navbar>
          <Nav navbar>
            {/* <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to={config.baseLOCATION + "/schedule"}
                >
                  Attendance Form
                      </Link>
              </li>
            </ul> */}
          </Nav>
        </Collapse>
        <div className="navbar-text">
          <Nav navbar>
          {/* <li className="nav-item">
            <Link
              className="nav-link text-white"
              to={config.baseLOCATION + "/devtimeline"}
            >
              Development Timeline
            </Link>
          </li> */}
          
          <ul className="menu">
              {state && state.authenticated ? (
                <Button className="log-button" color="danger" onClick={_handleLogoutClick}><span title="log out"><ExitToApp /> {user.auth.name}</span></Button>
              ) : (
                <Button className="log-button" color="primary" onClick={_handleSignInClick}><span title="log in">{t("login.label")}</span></Button>
              )}
            </ul>
            <LanguageSelector />
          </Nav>
          
        </div>
      </Navbar>

    );
}
