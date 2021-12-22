import React from "react";
import Landingpage from "./components/Landingpage.jsx";
import LoginError from "./components/common/LoginError/LoginError";
import Homepage from "./components/Homepage/Homepage";
import Timeline from "./components/Timeline/Timeline"
import Database from "./components/Admin/Database"
import Footer from "./components/Footer/Footer"
import {Credits} from "./components/Credits/Credits"

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
      <Route exact path={"/projects/list"} component={authGuard(ProjectsList)} />
      <Route exact path={"/home"} component={Homepage} />
      <Route exact path={"/devtimeline"} component={Timeline} />
      <Route exact path={"/credits"} component={Credits} />
      <Route exact path={"/timeline"} component={Timeline} />
      <Route
        render={({ location }) => {
          if (location.pathname !== "/") {return <><Header />
          {/* <Footer /> */}
          </>};
        }}
      />
    </HashRouter>
  );
};
