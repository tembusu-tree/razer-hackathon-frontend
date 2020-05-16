import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SettingsItem from "../../components/SettingsItem";
import { Helmet } from "react-helmet";
import StandardPageHeader from "../../components/StandardPageHeader";
import { ReactComponent as CrownLogo } from "../../assets/icons/crown.svg";
import useLanguage from "../../utils/hooks/useLanguage";
import useTheming from "../../utils/hooks/useTheming";
import Spacing from "../../components/Spacing";

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    minHeight: "100vh",
    alignItems: "flex-start",
    paddingTop: theme.spacing(3),
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
}));

function Rewards() {
  const classes = styles();
  const { t } = useLanguage();
  const { spacing } = useTheming();

  return (
    <div className={classes.container}>
      <Helmet>
        <title>{t("nav.rewards")}</title>
      </Helmet>
      <Fade in>
        <Container maxWidth="md">
          <Spacing height={4} />
          <StandardPageHeader title={t("rewards.title")} />
          {[1, 2, 3].map((key) => (
            <Box key={key.toString()} marginBottom={2}>
              <Card variant="outlined">
                <SettingsItem
                  title={t(`rewards.reward_placeholder_title_${key}`)}
                  subtitle={t(`rewards.reward_placeholder_description_${key}`)}
                  ActionComponent={
                    <Button color="primary" variant="contained" disabled>
                      {t("rewards.not_available")}
                    </Button>
                  }
                />
              </Card>
            </Box>
          ))}
          <Spacing height={4} />
          <StandardPageHeader title={t("rewards.achievements")} />
          {[1, 2].map((key) => (
            <Box key={key.toString()} marginBottom={2}>
              <Card variant="outlined">
                <SettingsItem
                  title={t(`rewards.achievement_placeholder_title_${key}`)}
                  subtitle={t(
                    `rewards.achievement_placeholder_description_${key}`
                  )}
                  ActionComponent={
                    <CrownLogo width={spacing(2.5)} height={spacing(2.5)} />
                  }
                />
              </Card>
            </Box>
          ))}
        </Container>
      </Fade>
    </div>
  );
}

export default Rewards;
