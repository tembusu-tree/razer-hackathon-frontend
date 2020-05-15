import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

function StandardPageHeader({ title = "Title" }) {
  return (
    <Box marginBottom={3}>
      <Box marginBottom={1}>
        <Typography variant="h4" color="textPrimary">
          {title || "Title"}
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
}

export default StandardPageHeader;
