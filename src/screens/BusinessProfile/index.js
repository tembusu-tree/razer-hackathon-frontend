import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as Logo } from "../../assets/icons/business.svg";
import useTheming from "../../utils/hooks/useTheming";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import useLanguage from "../../utils/hooks/useLanguage";
import CircularProgress from "@material-ui/core/CircularProgress";
import Spacing from "../../components/Spacing";
import Hidden from "@material-ui/core/Hidden";
import { useDispatch, connect } from "react-redux";
import {
  selectBusinessProfile,
  deselectBusinessProfile,
} from "../../redux/actions/businessProfile";
import { useHistory } from "react-router-dom";

const profiles = [
  { key: "online" },
  { key: "store_front" },
  { key: "food" },
  { key: "delivery" },
  { key: "fashion" },
  { key: "manufacturing" },
  { key: "financial_services" },
];

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    paddingTop: theme.spacing(6),
    backgroundColor: theme.palette.background.default,
  },
  logoContainer: {
    position: "relative",
    top: theme.spacing(-6),
    left: theme.spacing(-6),
  },
  titleContainer: {
    position: "relative",
    top: theme.spacing(-14),
    left: theme.spacing(20),
  },
  preferenceItemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  updateContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function BusinessProfile(props) {
  const [loading, setLoading] = useState();
  // const [initialProfiles, setInitialProfiles] = useState();
  const classes = styles();
  const { spacing } = useTheming();
  const { t } = useLanguage();
  const history = useHistory();
  const dispatch = useDispatch();

  const { profileByKey } = props;

  function onClickCheckbox(key, checked) {
    if (checked) {
      dispatch(deselectBusinessProfile(key));
      return;
    }
    dispatch(selectBusinessProfile(key));
  }

  function onUpdateClick() {
    setLoading(true);
    // TODO: change to profile service
    setTimeout(() => {
      setLoading(false);
      history.push("/home");
    }, 1500);
  }

  const hasChanged = false;

  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Fade in>
          <Paper>
            <Hidden smDown>
              <div className={classes.logoContainer}>
                <Logo width={spacing(20)} height={spacing(20)} />
              </div>
            </Hidden>
            <Box marginTop={-6} padding={4}>
              <Typography variant="h5">
                <b>{t("business_profile.title")}</b>
              </Typography>
              <Spacing height={4} />
              <Grid container direction="row" spacing={2} wrap="wrap">
                {profiles.map((profile) => {
                  const isChecked = !!profileByKey[profile.key];

                  return (
                    <Grid key={profile.key} item xs={12} sm={12} md={6} lg={6}>
                      <Card
                        variant="outlined"
                        onClick={() => onClickCheckbox(profile.key, isChecked)}
                      >
                        <CardContent>
                          <div className={classes.preferenceItemContainer}>
                            <Typography variant="h6">
                              {t(`business_profile.${profile.key}`)}
                            </Typography>
                            <Checkbox
                              onClick={() =>
                                onClickCheckbox(profile.key, isChecked)
                              }
                              color="primary"
                              checked={isChecked}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
              <Spacing height={4} />
              <div className={classes.updateContainer}>
                <Button
                  onClick={() => history.push("/home")}
                  variant="text"
                  color="primary"
                >
                  <b>{t("business_profile.skip")}</b>
                </Button>
                <div
                  className={classes.buttonContainer}
                  style={{ margin: spacing(2) }}
                >
                  {loading && (
                    <CircularProgress color="primary" size={spacing(2)} />
                  )}
                  <Spacing width={1} />
                  <Button
                    onClick={onUpdateClick}
                    disabled={!hasChanged || loading}
                    variant="contained"
                    color="primary"
                  >
                    {t("business_profile.update")}
                  </Button>
                </div>
              </div>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { businessProfile } = state;
  return { profileByKey: businessProfile.byKey };
};

export default connect(mapStateToProps)(BusinessProfile);
