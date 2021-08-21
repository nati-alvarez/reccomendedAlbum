// this is a wrapper for routes that need to be secured.

import React from "react";
import {Redirect, Route} from "react-router-dom";
// import {useAuth} from "./AuthProvider";

let deserializedAccessData = localStorage.getItem("userID");

function PrivateRoute({component: Component, ...rest}) {
  // const {currentUser} = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        //if we have a current user we want to render the secured component - if we dont take the user to login.
        return deserializedAccessData ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
