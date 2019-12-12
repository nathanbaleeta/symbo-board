import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  //checks for the presence of a token in localStorage:
  //if there is one, it means an authenticated user is logged-in
  const isAuthed = Boolean(localStorage.getItem("token"));
  return (
    <Route
      {...rest}
      render={props =>
        isAuthed ? (
          <Component history={props.history} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
