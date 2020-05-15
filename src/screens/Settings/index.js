import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import SettingsItem from "../../components/SettingsItem";
import { Helmet } from "react-helmet";
import StandardPageHeader from "../../components/StandardPageHeader";
import useLanguage from "../../utils/hooks/useLanguage";

const languages = ["en", "id"];

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

function Settings() {
  const classes = styles();
  const { t, currentLang, changeLang } = useLanguage();
  const currentLanguage = currentLang;

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    changeLang(lang || "en");
  };

  return (
    <div className={classes.container}>
      <Helmet>
        <title>{t("nav.settings")}</title>
      </Helmet>
      <Fade in>
        <Container maxWidth="md">
          <StandardPageHeader title={t("nav.settings")} />
          <Box marginBottom={2}>
            <Card variant="outlined">
              <SettingsItem
                title={t("settings.change_language")}
                subtitle={t("settings.change_language_description")}
                ActionComponent={
                  <Select
                    native
                    value={currentLanguage}
                    onChange={handleLanguageChange}
                  >
                    {languages.map((lang, i) => (
                      <option key={i.toString()} value={lang}>
                        {t(`settings.language_${lang}`)}
                      </option>
                    ))}
                  </Select>
                }
              />
            </Card>
          </Box>
        </Container>
      </Fade>
    </div>
  );
}

export default Settings;
