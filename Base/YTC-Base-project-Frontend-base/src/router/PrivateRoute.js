import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
export const PrivateRoute = ({ children, ...rest }) => {
  const check = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        check ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
