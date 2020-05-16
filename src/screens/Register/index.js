import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Spacing from "../../components/Spacing";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import useLanguage from "../../utils/hooks/useLanguage";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CORPPASS_URL } from "../../config";
import useTheming from "../../utils/hooks/useTheming";
import { CardContent } from "@material-ui/core";
import {
  isValidEmail,
  isValidMobilePhone,
  isTextLengthGte,
  isValidPassword,
} from "../../utils/common";
import { useHistory } from "react-router-dom";

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  header: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  headerTitle: {
    color: theme.palette.white,
  },
  cover: {
    width: 150,
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardContentContainer: {
    padding: theme.spacing(3),
  },
  corppassImage: {
    objectFit: "contain",
  },
  orContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  corppassButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function CorpPassCard({ onSkip = () => {} }) {
  const classes = styles();
  const { t } = useLanguage();

  function onClickButton() {
    window.open(CORPPASS_URL, "_blank");
  }

  return (
    <Grid className={classes.cardContentContainer} container direction="row">
      <Grid item>
        <img
          alt={"CorpPass"}
          className={classes.corppassImage}
          src={require("../../assets/images/corppass.png")}
        />
      </Grid>
      <Grid item>
        <Typography variant="h5">
          <b>{t("register.corppass_title")}</b>
        </Typography>
        <Typography>{t("register.corppass_description")}</Typography>
        <Spacing height={2} />
        <div className={classes.corppassButtonContainer}>
          <Button
            onClick={onClickButton}
            variant="contained"
            color="primary"
            size="small"
          >
            {t("register.use_corppass")}
          </Button>
          <Button
            onClick={onSkip}
            variant="outlined"
            color="primary"
            size="small"
          >
            {t("register.register_manually")}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

function RegisterPersonal() {
  const [isManual, setIsManual] = useState(false);
  const [acra, setAcra] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyMobile, setCompanyMobile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const classes = styles();

  const { t } = useTranslation();
  const { spacing } = useTheming();
  const history = useHistory();

  function onAcraNumberChange(event) {
    setAcra(event.target.value);
  }

  function onBusinessTypeChange(event) {
    setBusinessType(event.target.value);
  }

  function onCompanySizeChange(event) {
    setCompanySize(event.target.value);
  }

  function onCompanyMobileChange(event) {
    setCompanyMobile(event.target.value);
  }

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function onLastNameChange(event) {
    setLastName(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function onMobileChange(event) {
    setMobile(event.target.value);
  }

  function onRegister() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/business/profile");
    }, 2000);
  }

  const isAcraValid = isTextLengthGte(acra, 4);
  const isBusinessTypeValid = isTextLengthGte(businessType, 2);
  const isCompanySizeValid = isTextLengthGte(companySize, 1);
  const isCompanyMobileValid = isValidMobilePhone(companyMobile);

  const isFirstNameValid = isTextLengthGte(firstName, 1);
  const isLastNameValid = isTextLengthGte(lastName, 1);
  const isEmailValid = isValidEmail(email);
  const isMobileValid = isValidMobilePhone(mobile);
  const isPasswordValid = isValidPassword(password);
  const isConfirmPasswordValid =
    !!confirmPassword && password === confirmPassword;

  const isFormValid =
    isAcraValid &&
    isBusinessTypeValid &&
    isCompanySizeValid &&
    isCompanyMobileValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isFirstNameValid &&
    isLastNameValid &&
    isMobileValid;

  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Fade in>
          <Paper>
            <div className={classes.header}>
              <Spacing height={8} />
              <CardContent>
                <div style={{ marginLeft: spacing(2) }}>
                  <Typography variant="h4" className={classes.headerTitle}>
                    <b>{t("register.title")}</b>
                  </Typography>
                </div>
              </CardContent>
              <Spacing height={1} />
            </div>
            {!isManual ? (
              <CorpPassCard onSkip={() => setIsManual(true)} />
            ) : (
              <>
                <CardContent>
                  <ListItem>
                    <Typography variant="h5">
                      <b>{t("register.business_details")}</b>
                    </Typography>
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!acra && !isAcraValid}
                      value={acra}
                      onChange={onAcraNumberChange}
                      type="text"
                      fullWidth
                      label={t("input.acra_number")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!businessType && !isBusinessTypeValid}
                      value={businessType}
                      onChange={onBusinessTypeChange}
                      type="text"
                      fullWidth
                      label={t("input.type_of_business")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!companySize && !isCompanySizeValid}
                      value={companySize}
                      onChange={onCompanySizeChange}
                      type="text"
                      fullWidth
                      label={t("input.company_size")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!companyMobile && !isCompanyMobileValid}
                      value={companyMobile}
                      onChange={onCompanyMobileChange}
                      type="number"
                      fullWidth
                      label={t("input.company_mobile")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Spacing height={4} />
                  <ListItem>
                    <Typography variant="h5">
                      <b>{t("register.profile_details")}</b>
                    </Typography>
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!firstName && !isFirstNameValid}
                      value={firstName}
                      onChange={onFirstNameChange}
                      type="text"
                      fullWidth
                      label={t("input.first_name")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!lastName && !isLastNameValid}
                      value={lastName}
                      onChange={onLastNameChange}
                      type="text"
                      fullWidth
                      label={t("input.last_name")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!email && !isEmailValid}
                      value={email}
                      onChange={onEmailChange}
                      type="email"
                      fullWidth
                      label={t("input.email")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!password && !isPasswordValid}
                      value={password}
                      onChange={onPasswordChange}
                      type="password"
                      fullWidth
                      label={t("input.password")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!confirmPassword && !isConfirmPasswordValid}
                      value={confirmPassword}
                      onChange={onConfirmPasswordChange}
                      type="password"
                      fullWidth
                      label={t("input.confirm_password")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Spacing height={2} />
                  <ListItem>
                    <TextField
                      error={!!mobile && !isMobileValid}
                      value={mobile}
                      onChange={onMobileChange}
                      fullWidth
                      label={t("input.phone_number")}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                  <Grid container justify="flex-end">
                    <div
                      className={classes.buttonContainer}
                      style={{ margin: spacing(2) }}
                    >
                      {loading && (
                        <CircularProgress color="primary" size={spacing(2)} />
                      )}
                      <Spacing width={1} />
                      <Button
                        onClick={onRegister}
                        disabled={!isFormValid || loading}
                        variant="contained"
                        color="primary"
                      >
                        {t("register.title")}
                      </Button>
                    </div>
                  </Grid>
                </CardContent>
              </>
            )}
          </Paper>
        </Fade>
      </Container>
    </div>
  );
}

export default RegisterPersonal;
