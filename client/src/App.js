import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "./Components/Login";
import Home from "./Components/Home";

import UnauthedRoute from "./Components/UnauthedRoute";
import AuthedRoute from "./Components/AuthedRoute";

const App = () => (
  <Router>
    <Switch>
      <UnauthedRoute path="/auth/login" component={Login} />
      <AuthedRoute path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
