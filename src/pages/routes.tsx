import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import SingIn from "./singIn";

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/singin"} component={SingIn} />
      </Switch>
    </>
  );
};

export default Routes;
