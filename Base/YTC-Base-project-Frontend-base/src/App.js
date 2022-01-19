import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import { CssBaseline } from "@material-ui/core";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch></Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
