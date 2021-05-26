import React from "react";
import Navigation from "../components/Navigation";

export default props => {
  return (
    <div>
      <Navigation />
      <div className="wrapper">{props.children}</div>
    </div>
  );
};

