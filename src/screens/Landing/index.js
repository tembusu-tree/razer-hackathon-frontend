import React from "react";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import useTheming from "../../utils/hooks/useTheming";
import LandingBackground from "../../assets/images/landing.jpg";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import useLanguage from "../../utils/hooks/useLanguage";
import { useHistory } from "react-router-dom";
import Spacing from "../../components/Spacing";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as SecurityLogo } from "../../assets/icons/security.svg";
import { ReactComponent as KeyLogo } from "../../assets/icons/key.svg";
import { ReactComponent as FutureLogo } from "../../assets/icons/future.svg";
import clsx from "clsx";

const maxContentWidth = "lg";

const links = [
  { key: "our_products" },
  { key: "contact_us" },
  {
    key: "login",
    link: "/login",
  },
  {
    key: "sign_up",
    link: "/register",
  },
];

const iconSpread = [
  {
    key: "reliability",
    icon: SecurityLogo,
  },
  {
    key: "long_term",
    icon: FutureLogo,
  },
  {
    key: "security",
    icon: KeyLogo,
  },
];

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  headerContainer: {
    height: theme.spacing(60),
    backgroundImage: `url(${LandingBackground})`,
    backgroundSize: "cover",
  },
  overlay: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    backgroundColor: "rgb(0,0,0,0.7)",
  },
  headerContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
  },
  introText: {
    color: theme.palette.grey[50],
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  iconSpreadContainer: {
    width: "100vw",
  },
  iconContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  iconTextContainer: {
    textAlign: "center",
  },
  footerContainer: {
    height: theme.spacing(30),
    backgroundColor: theme.palette.primary.main,
  },
}));

function Landing() {
  const classes = styles();
  const { spacing } = useTheming();
  const { t } = useLanguage();
  const history = useHistory();

  function onNavClicked(link) {
    if (!link) {
      return;
    }

    history.push(link);
  }

  return (
    <div className={classes.container}>
      <Fade in>
        <div className={classes.contentContainer}>
          <div className={classes.headerContainer}>
            <div className={classes.overlay} />
            <div className={classes.headerContent}>
              <Container maxWidth={maxContentWidth}>
                <Box marginTop={3} marginBottom={5}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Logo width={spacing(6)} height={spacing(6)} />
                    </Grid>
                    <Grid item>
                      {links.map((item) => {
                        const NavButton = () => (
                          <Button
                            color="primary"
                            variant={
                              item.key === "sign_up" ? "contained" : "text"
                            }
                            onClick={() => onNavClicked(item.link)}
                          >
                            {t(`landing.${item.key}`)}
                          </Button>
                        );

                        if (item.key !== "sign_up" && item.key !== "login") {
                          return (
                            <Hidden key={item.key} smDown>
                              <NavButton />
                            </Hidden>
                          );
                        }

                        return <NavButton key={item.key} />;
                      })}
                    </Grid>
                  </Grid>
                </Box>
                <Hidden smDown>
                  <Spacing height={8} />
                </Hidden>
                <Typography
                  variant="h4"
                  color="initial"
                  className={classes.introText}
                >
                  {t("landing.intro_message")}
                </Typography>
                <Spacing height={4} />
                <Button
                  onClick={() => history.push("/register")}
                  variant="contained"
                  color="primary"
                >
                  {t("landing.apply_for_account")}
                </Button>
              </Container>
            </div>
          </div>
          <div className={classes.iconSpreadContainer}>
            <Spacing height={12} />
            <Container maxWidth={maxContentWidth}>
              <Grid container direction="row" justify="space-evenly">
                {iconSpread.map((item) => {
                  const MainIcon = item.icon;

                  return (
                    <Grid key={item.key} item xs={12} sm={4} md={4}>
                      <div
                        className={classes.iconContainer}
                        style={{
                          paddingRight: spacing(8),
                          paddingLeft: spacing(8),
                        }}
                      >
                        <MainIcon width={spacing(8)} height={spacing(8)} />
                        <Spacing height={2} />
                        <Typography className={classes.iconTextContainer}>
                          <b>{t(`landing.${item.key}`)}</b>
                        </Typography>
                        <Spacing height={1} />
                        <Typography className={classes.iconTextContainer}>
                          {t(`landing.${item.key}_description`)}
                        </Typography>
                        <Spacing height={12} />
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </div>
          <div
            className={clsx(
              classes.iconSpreadContainer,
              classes.footerContainer
            )}
          ></div>
        </div>
      </Fade>
    </div>
  );
}

export default Landing;
