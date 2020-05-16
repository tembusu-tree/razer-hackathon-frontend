import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import useLanguage from "../../utils/hooks/useLanguage";
import Spacing from "../../components/Spacing";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import useTheming from "../../utils/hooks/useTheming";

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

function ApplyLoanSuccess() {
  const classes = styles();
  const { t} = useLanguage();
  const { spacing } = useTheming();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <Container maxWidth="xs">
        <Fade in>
          <Paper>
            <CardContent>
              <Typography variant="h5"><b>{t('apply_loan_success.title')}</b></Typography>
              <Spacing height={3} />
              <Typography>{t('apply_loan_success.description')}</Typography>
              <Spacing height={3} />
              <div
                className={classes.buttonContainer}
                style={{ margin: spacing(2) }}
              >
                <Button
                  onClick={() => history.push('/home')}
                  variant="contained"
                  color="primary"
                >
                  {t("apply_loan_success.back_to_home")}
                </Button>
              </div>
            </CardContent>
          </Paper>
        </Fade>
      </Container>
    </div>
  );
}

export default ApplyLoanSuccess;
