import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

function CustomRoute({ privateRoute = false, children, ...props }) {
  return (
    <Route
      {...props}
      render={({ location }) => {
        const redirectOptions = {
          pathname: "/",
          state: { from: location },
        };

        if (privateRoute) {
          return isAuthenticated() ? (
            children
          ) : (
            <Redirect to={redirectOptions} />
          );
        }

        // not private, change to Home
        redirectOptions.pathname = "/home";

        return isAuthenticated() ? <Redirect to={redirectOptions} /> : children;
      }}
    />
  );
}

export default CustomRoute;
