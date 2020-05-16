import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useLanguage from "../../utils/hooks/useLanguage";
import Spacing from "../../components/Spacing";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import { MIN_LOAN_AMOUNT, MAX_LOAN_AMOUNT } from "../../config";
import { formatNumber, calculateInterestRate } from "../../utils/common";
import useTheming from "../../utils/hooks/useTheming";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { useHistory, useLocation } from "react-router-dom";
import { requestLoan } from "../../services/loans";

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  sliderInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  noneButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function ApplyLoanRequest() {
  const [loanAmount, setLoanAmount] = useState(MIN_LOAN_AMOUNT);
  
  const { state } = useLocation();
  const selected = state ? state.selected : [];
  
  const [loanInterest, setLoanInterest] = useState(calculateInterestRate(selected, MIN_LOAN_AMOUNT));
  const [loading, setLoading] = useState(false);
  const classes = styles();
  const { spacing } = useTheming();
  const { t } = useLanguage();
  const history = useHistory();

  if (!state || selected.length <= 0) {
    return (
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Fade in>
            <Paper>
              <CardContent>
                <Typography variant="h6">
                  <b>{t("apply_loan_request.none_selected_title")}</b>
                </Typography>
                <Spacing height={2} />
                <Typography>
                  {t("apply_loan_request.none_selected_description")}
                </Typography>
                <Spacing height={4} />
                <div className={classes.noneButtonContainer}>
                  <Button
                    onClick={() => history.replace("/loans")}
                    color="primary"
                  >
                    {t("apply_loan_request.back_to_selection")}
                  </Button>
                  <Button
                    onClick={() => history.push("/home")}
                    color="primary"
                    variant="contained"
                  >
                    {t("apply_loan_request.contact_representative")}
                  </Button>
                </div>
              </CardContent>
            </Paper>
          </Fade>
        </Container>
      </div>
    );
  }

  function onSliderChange(event, value) {
    setLoanAmount(value);
  }

  function onSliderChangeEnd(event, value) {
    setLoanInterest(calculateInterestRate(selected, value));
  }

  function onLoanApply() {
    setLoading(true);
    requestLoan(loanAmount, loanInterest)
      .then(() => {
        setLoading(false);
        history.push("/loans/request/success");
      })
      .catch(() => setLoading(true));
  }

  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Fade in>
          <Paper>
            <CardContent>
              <Typography variant="h5">
                <b>{t("apply_loan_request.title")}</b>
              </Typography>
              <Spacing height={5} />
              <Typography variant="h6">
                <b>{t("apply_loan_request.loan_value")}</b>
              </Typography>
              <Typography variant="h4" color="primary">
                <b>{`SGD ${formatNumber(loanAmount)}`}</b>
              </Typography>
              <Spacing height={4} />
              <Typography variant="h6">
                <b>{t("apply_loan_request.loan_interest")}</b>
              </Typography>
              <Typography variant="h4" color="primary">
                <b>{`${loanInterest}%`}</b>
              </Typography>
              <Spacing height={6} />
              <Box marginLeft={6} marginRight={6}>
                <Slider
                  onChange={onSliderChange}
                  onChangeCommitted={onSliderChangeEnd}
                  // valueLabelDisplay="auto"
                  step={500}
                  min={MIN_LOAN_AMOUNT}
                  max={MAX_LOAN_AMOUNT}
                />
              </Box>
              <div className={classes.sliderInfoContainer}>
                <Typography>
                  <b>{`SGD${formatNumber(MIN_LOAN_AMOUNT)}`}</b>
                </Typography>
                <Typography>
                  <b>{`SGD${formatNumber(MAX_LOAN_AMOUNT)}`}</b>
                </Typography>
              </div>
              <Spacing height={6} />
              <div
                className={classes.buttonContainer}
                style={{ margin: spacing(2) }}
              >
                {loading && (
                  <CircularProgress color="primary" size={spacing(2)} />
                )}
                <Spacing width={1} />
                <Button
                  onClick={onLoanApply}
                  variant="contained"
                  disabled={loading}
                  color="primary"
                >
                  {t("apply_loan_request.apply_now")}
                </Button>
              </div>
            </CardContent>
          </Paper>
        </Fade>
      </Container>
    </div>
  );
}

export default ApplyLoanRequest;
