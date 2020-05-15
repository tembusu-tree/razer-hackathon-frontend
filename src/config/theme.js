import { createMuiTheme } from "@material-ui/core";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0277bd",
    },
    dashboard: {
      backgroundColor: "rgba(200,200,200,0.4)",
      iconColor: "#000",
      activeColor: "rgba(0,0,0,0.1)",
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'Helvetica', 'Arial', sans-serif",
  },
});

export { lightTheme };
