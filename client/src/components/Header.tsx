import { Link } from "react-router-dom";
import "./Header.scss"
import React, { useEffect, useState } from "react";
import { config } from "../config"
import { useSelector, useDispatch } from "react-redux";
import { AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR } from '../redux/reducers/types'
import { ExitToApp, ThreeDRotation } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import GeneralModal from "../designSystems/Modal";

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Sidebar from "./SideBar/SideBar"

import { withTranslation } from "react-i18next";
import "../services/i18n";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Avatar from '@material-ui/core/Avatar';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import GenericModal from "../designSystems/genericModal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    customizeToolbar: {
      minHeight: 60
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const Header = () => {
  const user = useSelector((state) => ({ auth: state.auth }));
  const [auth, setAuth] = React.useState(true);
  const classes = useStyles();
  const [state, setState] = useState();
  const [modalLoginShow, setModalLoginShow] = useState < boolean > (false);
  const [pic, setPic] = useState();

  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState < null | HTMLElement > (null);
  const [anchorElMenu, setAnchorElMenu] = React.useState < null | HTMLElement > (null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElMenu(null);
  };


  function getModalStyle() {
    return {
      width: '50%',
      maxWidth: '100vw',
      maxHeight: '100%',
      position: 'fixed',
      top: '50%',
      left: '25%',
      transform: 'translate(0, -50%)',
      overflowY: 'auto'
    };
  }


  const handleModal = () => {
    setModalLoginShow(!modalLoginShow)
  }

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);


  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    login();
    console.log(user.auth)
  }, [])

  // gets login details
  function login() {
    fetch(config.baseURL + config.baseLOCATION + "/auth/login/success", {
      method: "GET",
      // body: JSON.stringify({ start: performance.now() }),
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        // "Access-Control-Allow-Origin":true
      }
    })
      .then(response => {
        if (response.status) return response.json();
        // if (response.status === 401) return response.json()
      })
      .then(responseJson => {
        console.log('here', responseJson);
        if (responseJson.success === true) {
          getIcon(responseJson.user.token)
          sessionStorage.setItem('exp', responseJson.user.exp);
          sessionStorage.setItem('token_refresh', responseJson.user.token_refresh);
          sessionStorage.setItem('userEmail', responseJson.user.email);
          sessionStorage.setItem('userName', responseJson.user.userName);
          sessionStorage.setItem('name', responseJson.user.first_name);
          sessionStorage.setItem('token', responseJson.user.token);
          sessionStorage.setItem('roles', responseJson.user.roles);

          dispatch({
            type: AUTH_SIGN_IN,
            payload: {
              role: responseJson.user.roles,
              userName: responseJson.user.userName,
              name: responseJson.user.first_name,
              email: responseJson.user.email,
              token: responseJson.user.token
            }
          }
          );
          setState({
            authenticated: true,
            user: responseJson.user
          });
        }
        else {
          setState({
            authenticated: false,
            error: "Failed to authenticate user"
          });
        }
      }

      )
      .catch(err => {
        setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
        console.log(err);
        _handleLogoutClick();
      });
  }

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
        // setState({
        //   // authenticated: false,
        //   error: "Failed to authenticate user"
        // });
        console.log(error)
      });
  }


  const _handleSignInClick = () => {
    // check if user is student or nokia employee
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    if (user.auth.type === "student") {
      window.open(config.baseURL + config.baseLOCATION + "/auth/linkedin", "_self");
    }
    else {
      window.open(config.baseURL + config.baseLOCATION + "/auth/azure", "_self");
    }

  };


  const body = (
    <div>
      <List component="nav" className={classes.root} aria-label="mailbox-folders">
        <h5>Please login in order to continue:</h5>
        <Button variant="contained" onClick={() => { _handleSignInClick }} color="primary">
          <LinkedInIcon />LinkedIn
        </Button>
        <div className="container">
          <div className="border" />
          <span className="content">
            or
          </span>
          <div className="border" />
        </div>
      </List>
    </div>
  );

  const _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open(config.baseURL + config.baseLOCATION + "/auth/logout", "_self");
    sessionStorage.removeItem('exp')
    sessionStorage.removeItem('userEmail')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('roles')
    _handleNotAuthenticated();
  };
  const _handleNotAuthenticated = () => {
    setState({ authenticated: false });
  };
  return (
    <div className={classes.root}>
      <AppBar className="nav-bar" position="fixed">

        <Toolbar className={classes.customizeToolbar}>
          {user.auth.type !== "student" ? <Sidebar /> : null}
          <Typography variant="h6" className={classes.title}>
            <Link className="navbar-brand text-white" to={config.baseLOCATION + "/"}>
              <b>NOKIA</b> {config.AppName} {user.auth.type === 'student' ? <div className="header-title"> {t("navbar.students")} </div> : null}
            </Link >
          </Typography>
          {(state && state.authenticated) ? (
            <div className="avatar">
              {/* {pic ? */}
              <div className='icon'>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  className="icon"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar alt="avatar Sharp"
                    // className={classes.small}
                    src={pic} /> <div className='avatar-name'>{state.user.first_name}</div>
                </IconButton>
              </div>
              {/* : null} */}
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
                <MenuItem onClick={_handleLogoutClick}><span title="log out"><ExitToApp /> Log out</span></MenuItem>
              </Menu>

            </div>
          ) : (<div><Button variant="text" onClick={_handleSignInClick}><span title="log in">{t("login.label")}</span></Button></div>)}
        </Toolbar>
      </AppBar>
      {modalLoginShow ?
        <GenericModal
          open={modalLoginShow}
          getModalStyle={getModalStyle}
          title="Sign In Methods"
          handleModal={handleModal}
          handleClose={handleClose}
          body={body}
        /> : null
      }
    </div>

  );
}
