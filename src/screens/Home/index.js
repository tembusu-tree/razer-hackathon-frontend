import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import Fade from "@material-ui/core/Fade";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import StandardPageHeader from "../../components/StandardPageHeader";
import { connect } from "react-redux";
import useLanguage from "../../utils/hooks/useLanguage";

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  contentContainer: {
    flexGrow: 1,
  },
}));

function Introduction(props) {
  const { userFirstName } = props;
  const classes = styles();
  const { t } = useLanguage();

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <Fade in>
          <div className={classes.contentContainer}>
            <StandardPageHeader
              title={t("common.welcome_user", { name: userFirstName })}
            />
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6].map((key) => (
                <Grid key={key.toString()} item xs={12} md={4}>
                  <Paper>
                    <ListItem>
                      <ListItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Rhoncus dolor purus non enim praesent
                        elementum facilisis leo vel.
                      </ListItemText>
                    </ListItem>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
        </Fade>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { firstName } = state.user;
  return {
    userFirstName: firstName,
  };
};

export default connect(mapStateToProps)(Introduction);
