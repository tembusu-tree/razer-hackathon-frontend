import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  },
  textContainer: {
    flex: 1,
  },
  actionContainer: {
    alignSelf: "center",
  },
}));

function SettingsItem({
  title = "Title",
  subtitle = "Subtitle",
  ActionComponent = null,
}) {
  const classes = styles();

  return (
    <div className={classes.container}>
      <CardContent className={classes.textContainer}>
        <Typography component="div" variant="body1" color="textPrimary">
          <Box fontWeight="fontWeightBold">{title || "Title"}</Box>
        </Typography>
        <Typography variant="body2" color="textPrimary">
          {subtitle || "subtitle"}
        </Typography>
      </CardContent>
      <CardContent classes={{ root: classes.actionContainer }}>
        {ActionComponent}
      </CardContent>
    </div>
  );
}

export default SettingsItem;
