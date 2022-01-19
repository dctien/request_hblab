import { createMuiTheme } from "@material-ui/core";
import { green, grey, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: green[500],
      light: green[300],
      dark: green[800],
      contrastText: "#fff",
    },
    secondary: {
      main: red[500],
      light: red[300],
      dark: red[700],
    },
    text: {
      secondary: grey[700],
    },
  },
  shape: {
    borderRadius: 7,
  },
  spacing: 4,
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 16,
  },
});
export default theme;
