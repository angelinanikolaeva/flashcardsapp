import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PublicRoute({ children, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !currentUser ? (
          children
        ) : (
          <Redirect
            to="/flashcardsapp/"
            // to={{
            //   pathname: "/",
            //   state: { from: location },
            // }}
          />
        )
      }
    />
  );
}

export default PublicRoute;
