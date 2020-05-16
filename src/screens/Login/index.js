import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Spacing from "../../components/Spacing";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { isValidEmail, isValidPassword } from "../../utils/common";
import useLanguage from "../../utils/hooks/useLanguage";
import useTheming from "../../utils/hooks/useTheming";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";
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
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { spacing } = useTheming();
  const history = useHistory();
  const { t } = useLanguage();
  const classes = styles();

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  const isEmailValid = isValidEmail(email);
  const isPasswordValid = isValidPassword(password);

  function onLogin() {
    setLoading(true);
    // TODO: change to login service
    setTimeout(() => {
      setLoading(false);
      history.push("/home");
    }, 2000);
  }

  return (
    <div className={classes.container}>
      <Container maxWidth="xs">
        <Fade in>
          <Paper>
            <CardContent>
              <Spacing height={4} />
              <div className={classes.logoContainer}>
                <Logo height={spacing(10)} width={spacing(10)} />
              </div>
              <Spacing height={3} />
              <div className={classes.logoContainer}>
                <Typography variant="h6">
                  <b>{t("landing.login")}</b>
                </Typography>
              </div>
              <Spacing height={4} />
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
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  onClick={onLogin}
                >
                  {!loading ? (
                    t("landing.login")
                  ) : (
                    <CircularProgress size={spacing(3)} />
                  )}
                </Button>
              </ListItem>
            </CardContent>
          </Paper>
        </Fade>
      </Container>
    </div>
  );
}

export default Login;
