import React from "react";
import Landingpage from "./components/Landingpage.jsx";
import Homepage from "./components/Homepage";

import {Header} from "./components/Header.jsx";
import { HashRouter, Route } from "react-router-dom";
import { config } from "./config"
import authGuard from "./HOCs/authGuard.js";

export const AppRouter = (props) => {
  return (
    <HashRouter  {...props} >
       <Route
        render={({ location }) => {
          if (location.pathname !== "/") return <Header />;
        }}
      />
      <Route exact path={"/"} component={Landingpage} />
      <Route exact path={"/home"} component={Homepage} />
      {/* {config.baseLOCATION + "/signup"} component={authGuard(signUpForm)} */}
    </HashRouter>
  );
};
