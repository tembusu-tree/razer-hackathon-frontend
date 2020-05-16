import { createMuiTheme } from "@material-ui/core";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#43A047",
    },
    dashboard: {
      backgroundColor: "rgba(0,0,0,0.8)",
      activeColor: "rgba(255,255,255,0.11)",
      textColor: "#E0E0E0",
      hoverColor: "rgba(255,255,255,0.2)",
    },
    background: {
      default: "#F5F5F5",
    },
    white: "#ffffff",
    black: "#000000",
  },
  typography: {
    fontFamily: "'Open Sans', 'Helvetica', 'Arial', sans-serif",
  },
});

export { lightTheme };
