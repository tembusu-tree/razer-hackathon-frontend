import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import Fade from "@material-ui/core/Fade";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
}));

function Login() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Fade in>
          <Paper>
            <ListItem>
              <ListItemText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices.aa
              </ListItemText>
            </ListItem>
          </Paper>
        </Fade>
      </Container>
    </div>
  );
}

export default Login;
