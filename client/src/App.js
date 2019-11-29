import React from "react";
import { Switch } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";

import UnauthedRoute from "./components/UnauthedRoute";
import AuthedRoute from "./components/AuthedRoute";

const App = () => (
  <Switch>
    <UnauthedRoute path="/auth/login" component={Login} />
    <AuthedRoute path="/" component={Home} />
  </Switch>
);

export default App;
