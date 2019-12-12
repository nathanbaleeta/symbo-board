import React from "react";
import "typeface-roboto";

import { Switch, Route } from "react-router-dom";

//import Login from "./components/Login";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

import AuthenticatedRoute from "./components/common/AuthenticatedRoute";

const App = () => (
  <Switch>
    <Route path="/auth/login" render={props => <SignIn {...props} />} />
    <Route path="/auth/signup" component={SignUp} />
    <AuthenticatedRoute path="/" component={Home} />
  </Switch>
);

export default App;
