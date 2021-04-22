import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          true ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
