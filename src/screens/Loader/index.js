import React from "react";
import GridLoader from "react-spinners/GridLoader";
import { makeStyles } from "@material-ui/core/styles";
import useTheming from "../../utils/hooks/useTheming";

const styles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
}));

const Loader = () => {
  const classes = styles();
  const { palette } = useTheming();

  return (
    <div className={classes.container}>
      <div>
        <GridLoader color={palette.dashboard.iconColor} size={12} loading />
      </div>
    </div>
  );
};

export default Loader;
