import { Redirect, Route } from "react-router-dom";
import tokenManager from "../utils/tokenManager";

function AuthRoute({ component: Component, ...restOfProps }) {
  const authUser = tokenManager.getUser();
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}

export default AuthRoute;