import React from "react";
import Landingpage from "./components/Landingpage.jsx";
import LoginError from "./components/LoginError";
import Homepage from "./components/Homepage/Homepage";
import Timeline from "./components/Timeline.jsx"
import Database from "./components/Admin/Database"
import Footer from "./components/Footer/Footer"

import ProjectsList from "./components/Projects/ProjectsList"

import {Header} from "./components/Header";
import { HashRouter, Route } from "react-router-dom";
import { config } from "./config"
import authGuard from "./HOCs/authGuard.js";

export const AppRouter = (props) => {
  return (
    <HashRouter  {...props} >
 
      <Route exact path={"/"} component={Landingpage} />
      <Route exact path={"/error"} component={LoginError} />
      <Route exact path={"/admin/database"} component={Database} />
      <Route exact path={"/projects/list"} component={ProjectsList} />
      <Route exact path={"/home"} component={Homepage} />
      <Route exact path={"/devtimeline"} component={Timeline} />
      <Route
        render={({ location }) => {
          if (location.pathname !== "/") {return <><Header /><Footer /></>};
        }}
      />
    </HashRouter>
  );
};
