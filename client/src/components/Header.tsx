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

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);



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
  const [auth, setAuth] = React.useState(true);
  const classes = useStyles();
  const [state, setState] = useState();
  // const [token, setToken] = useState(null);
  const [pic, setPic] = useState();

  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


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
        sessionStorage.setItem('token', responseJson.user.token)
        sessionStorage.setItem('roles', responseJson.user.roles)
        dispatch({
          type: AUTH_SIGN_IN,
          payload: {
            role: responseJson.user.roles,
            name: responseJson.user.first_name,
            email: responseJson.user.email,
            token: responseJson.user.token
          }
        }
        );
        getIcon(responseJson.user.token)
      }
      )
      .catch(error => {
        setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
        console.log(error)
      });
  }, [])

  const getIcon = (token) => {
    console.log(token)
    fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {
      method: "GET",
      // credentials: "include",
      headers: {
        Authorization: token,
      }
    })
      .then(response => {
        if (response.status === 200) return response;
        throw new Error("failed to authenticate user");
      })
      .then(response => response.blob())
      .then(blob => setPic(URL.createObjectURL(blob)))
      .catch(error => {
        setState({
          // authenticated: false,
          error: "Failed to authenticate user"
        });
        console.log(error)
      });
  }

  const _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    window.open(config.baseURL + config.baseLOCATION + "/auth/azure", "_self");
  };

  const _handleLogoutClick = () => {
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
  const _handleNotAuthenticated = () => {
    setState({ authenticated: false });
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link className="navbar-brand text-white" to={config.baseLOCATION + "/"}>
            <b>NOKIA</b> {config.AppName} {user.auth.type === 'student' ? <div className="header-title"> {t("navbar.students")} </div> : null}
            </Link>
          </Typography>
          {(state && state.authenticated) ? (
            <div>
              { pic ?
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt="Remy Sharp" src={pic} />
              </IconButton>
              : null }
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={_handleLogoutClick}><span title="log out"><ExitToApp /> Log out</span></MenuItem>
              </Menu>

            </div>
          ) : (<div><Button variant="contained" color="primary" onClick={_handleSignInClick}><span title="log in">{t("login.label")}</span></Button></div>)}
        </Toolbar>
      </AppBar>
    </div>
    // <div className={classes.root}>
    // <AppBar position="static">
    //   <Toolbar>
    //     <Link className="navbar-brand text-white" to={config.baseLOCATION + "/"}>
    //       <Typography variant="h6" className={classes.title}>
    //         <b>NOKIA</b> {config.AppName} {user.auth.type === 'student' ? <div className="header-title"> {t("navbar.students")} </div> : null}
    //       </Typography>
    //     </Link>
    //     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //       <MenuIcon />
    //     </IconButton>
    //   </Toolbar>
    //   {auth ?
    //       <FormGroup>
    //         <Button variant="contained" color="primary"
    //           onClick={_handleSignInClick}><span title="log in">{t("login.label")}</span>
    //         </Button>
    //       </FormGroup>
    //       : null
    //     }


    // </AppBar>
    // </div>
    // <Navbar className="navbar sticky-top" expand="sm">
    //   <Link className="navbar-brand text-white" id="navbar-brand" to={config.baseLOCATION + "/"}>
    //     <div className="navbar-brand"><b>NOKIA</b> {config.AppName} {user.auth.type === 'student' ? <div className="header-title"> {t("navbar.students")} </div>: null }</div>

    //   </Link>
    //   <Collapse 
    //   // isOpen={isOpen} 
    //   navbar>
    //     <Nav navbar>
    //       {/* <ul className="navbar-nav text-center">
    //         <li className="nav-item">
    //           <Link
    //             className="nav-link text-white"
    //             to={config.baseLOCATION + "/schedule"}
    //           >
    //             Attendance Form
    //                 </Link>
    //         </li>
    //       </ul> */}
    //     </Nav>
    //   </Collapse>
    //   <div className="navbar-text">
    //     <Nav navbar>
    //     {/* <li className="nav-item">
    //       <Link
    //         className="nav-link text-white"
    //         to={config.baseLOCATION + "/devtimeline"}
    //       >
    //         Development Timeline
    //       </Link>
    //     </li> */}

    //     <ul className="menu">
    //         {state && state.authenticated ? (
    //           <Button className="log-button" color="danger" onClick={_handleLogoutClick}><span title="log out"><ExitToApp /> {user.auth.name}</span></Button>
    //         ) : (
    //           <Button className="log-button" color="primary" onClick={_handleSignInClick}><span title="log in">{t("login.label")}</span></Button>
    //         )}
    //       </ul>
    //       <LanguageSelector />
    //     </Nav>

    //   </div>
    // </Navbar>

  );
}
