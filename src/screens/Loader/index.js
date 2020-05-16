import React from "react";
import GridLoader from "react-spinners/GridLoader";
import { makeStyles } from "@material-ui/core/styles";
import useTheming from "../../utils/hooks/useTheming";
import clsx from "clsx";

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
  compact: {
    height: "auto",
  },
}));

const Loader = ({ compact = false }) => {
  const classes = styles();
  const { palette } = useTheming();

  return (
    <div className={clsx(classes.container, compact && classes.compact)}>
      <div>
        <GridLoader color={palette.primary.main} size={12} loading />
      </div>
    </div>
  );
};

export default Loader;
