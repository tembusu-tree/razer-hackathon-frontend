import React from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const styles = makeStyles(() => ({
  roundedButton: {
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
    "&:disabled": {
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
  spacedRoundedButton: {
    paddingLeft: 24,
    paddingRight: 24,
  },
}));

function RoundedButton(props) {
  const { onClick, text, color, padded } = props;
  const classes = styles();

  return (
    <Fab
      className={clsx(
        classes.roundedButton,
        padded && classes.spacedRoundedButton
      )}
      variant="extended"
      onClick={onClick}
      color={color || "primary"}
    >
      {text || "button"}
    </Fab>
  );
}

export default RoundedButton;
