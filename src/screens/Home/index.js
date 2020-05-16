import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import StandardPageHeader from "../../components/StandardPageHeader";
import { connect, useDispatch } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import useLanguage from "../../utils/hooks/useLanguage";
import Spacing from "../../components/Spacing";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { formatNumber } from "../../utils/common";
import useTheming from "../../utils/hooks/useTheming";
import Loader from "../Loader";
import { getPartners } from "../../redux/actions/services";
import ServiceCard from "../../components/ServiceCard";
import { getUserProfile } from "../../redux/actions/user";

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    minHeight: "100vh",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  contentContainer: {
    flexGrow: 1,
  },
  balanceTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  learnMoreContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(-2.5),
  },
  paper: {
    height: "100%",
  },
}));

function Home(props) {
  const { userFirstName, isFetchingPartners, suggestedByKey } = props;
  const classes = styles();
  const { t } = useLanguage();
  const { spacing } = useTheming();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartners());
    dispatch(getUserProfile());
  }, []);

  // for react-loadable
  const imageKeyMap = {
    godaddy: require("../../assets/images/go_daddy.jpg"),
    office_365: require("../../assets/images/office_365.jpg"),
    intuit: require("../../assets/images/intuit.jpg"),
    azure: require("../../assets/images/azure.jpg"),
    aws: require("../../assets/images/aws.png"),
    shopify: require("../../assets/images/shopify.jpg"),
    moka_pos: require("../../assets/images/moka_pos.jpg"),
    wework: require("../../assets/images/wework.jpg"),
    food_panda: require("../../assets/images/foodpanda.jpg"),
    red_mart: require("../../assets/images/redmart.jpg"),
    zalora: require("../../assets/images/zalora.jpg"),
    shopback: require("../../assets/images/shopback.jpg"),
  };

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <Fade in>
          <div className={classes.contentContainer}>
            <Spacing height={5} />
            <StandardPageHeader
              title={t("common.welcome_user", { name: userFirstName })}
            />
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <CardContent>
                    <Typography variant="h5">
                      <b>{t(`home.balance`)}</b>
                    </Typography>
                    <Spacing height={2} />
                    <div className={classes.balanceTextContainer}>
                      <Typography color="primary" variant="h2">
                        <b>{formatNumber("2000")}</b>
                      </Typography>
                      <Spacing width={1} />
                      <div style={{ marginBottom: spacing(1) }}>
                        <Typography color="textPrimary" variant="h6">
                          {t("currency.sgd")}
                        </Typography>
                      </div>
                    </div>
                    <Spacing height={2} />
                    <div className={classes.learnMoreContainer}>
                      <Button color="primary">{t("home.learn_more")}</Button>
                    </div>
                  </CardContent>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <CardContent>
                    <Typography variant="h5">
                      <b>{t(`home.spending`)}</b>
                    </Typography>
                    <Spacing height={2} />
                    <div className={classes.balanceTextContainer}>
                      <Typography color="primary" variant="h2">
                        <b>{formatNumber("0")}</b>
                      </Typography>
                      <Spacing width={1} />
                      <div style={{ marginBottom: spacing(1) }}>
                        <Typography color="textPrimary" variant="h6">
                          {t("currency.sgd")}
                        </Typography>
                      </div>
                    </div>
                    <Spacing height={2} />
                    <div className={classes.learnMoreContainer}>
                      <Button color="primary">{t("home.learn_more")}</Button>
                    </div>
                  </CardContent>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <CardContent>
                    <Typography variant="h5">
                      <b>{t(`home.loan_repayments`)}</b>
                    </Typography>
                    <Spacing height={2} />
                    <div className={classes.balanceTextContainer}>
                      <Typography color="primary" variant="h2">
                        <b>{formatNumber("0")}</b>
                      </Typography>
                      <Spacing width={1} />
                      <div style={{ marginBottom: spacing(1) }}>
                        <Typography color="textPrimary" variant="h6">
                          {"%"}
                        </Typography>
                      </div>
                    </div>
                    <Spacing height={2} />
                    <div className={classes.learnMoreContainer}>
                      <Button color="primary">{t("home.learn_more")}</Button>
                    </div>
                  </CardContent>
                </Paper>
              </Grid>
            </Grid>
            <Spacing height={6} />
            {/* <StandardPageHeader title={t("home.latest_news")} />
            <Grid container>
              {
                [1, 2, 3].map((i) => (
                  null
                ))
              }
            </Grid> */}
            {isFetchingPartners && (
              <>
                <Loader compact />
                <Spacing height={3} />
              </>
            )}
            {Object.keys(suggestedByKey).map((key) => {
              const arr = Array.isArray(suggestedByKey[key])
                ? suggestedByKey[key]
                : [];

              return (
                <div key={key}>
                  <StandardPageHeader
                    title={t("home.some_service", {
                      name: t(`business_profile.${key}`),
                    })}
                  />
                  <Grid
                    container
                    alignItems="stretch"
                    direction="row"
                    spacing={2}
                  >
                    {arr.map((service) => {
                      return (
                        <Grid
                          key={service.name}
                          item
                          xs={12}
                          sm={12}
                          md={4}
                          lg={3}
                        >
                          <ServiceCard
                            title={service.name}
                            description={service.description}
                            image={imageKeyMap[service.key]}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Spacing height={6} />
                </div>
              );
            })}
          </div>
        </Fade>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { firstName } = state.user;
  const { partnersByKey, bpByKey, isFetchingPartners } = state.services;

  const suggestedByKey = {};
  // reselect this
  for (const bp in bpByKey) {
    if (bpByKey[bp] && partnersByKey[bp]) {
      suggestedByKey[bp] = partnersByKey[bp];
    }
  }

  return {
    userFirstName: firstName,
    isFetching: isFetchingPartners,
    suggestedByKey,
  };
};

export default connect(mapStateToProps)(Home);
