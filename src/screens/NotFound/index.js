import React from "react";

import { ReactComponent as Logo } from "../../assets/404.svg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import RoundedButton from "../../components/RoundedButton";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import useLanguage from "../../utils/hooks/useLanguage";

const logoSize = 128;

const styles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  paperRounded: {
    borderRadius: 32,
    maxWidth: theme.breakpoints.values.sm,
    padding: 64,
  },
}));

const NotFound = () => {
  const { t } = useLanguage();
  const classes = styles();
  const history = useHistory();

  const onGoHome = () => {
    history.replace("/");
  };

  return (
    <div className={classes.container}>
      <Helmet>
        <title>{t("errors.not_found_title")}</title>
      </Helmet>
      <Fade in>
        <Container maxWidth="xs">
          <Paper classes={{ rounded: classes.paperRounded }}>
            <Grid
              spacing={0}
              container
              direction="column"
              alignContent="center"
              alignItems="center"
            >
              <Grid item>
                <Logo height={logoSize} width={logoSize} />
              </Grid>
              <Grid item>
                <Box marginTop={3} marginBottom={1}>
                  <Typography color="textPrimary" variant="h6" align="center">
                    {t("errors.not_found_title")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Typography color="textPrimary" variant="body2" align="center">
                  {t("errors.not_found_description")}
                </Typography>
              </Grid>
              <Grid item>
                <Box marginTop={5}>
                  <RoundedButton
                    text={t("common.take_me_back")}
                    onClick={onGoHome}
                    padded
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Fade>
    </div>
  );
};

export default NotFound;
