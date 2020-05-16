import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import StandardPageHeader from "../../components/StandardPageHeader";
import { connect, useDispatch } from "react-redux";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import useLanguage from "../../utils/hooks/useLanguage";
import Spacing from "../../components/Spacing";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { formatNumber } from "../../utils/common";
import useTheming from "../../utils/hooks/useTheming";
import Loader from "../Loader";
import { getPartners } from "../../redux/actions/services";
import ServiceCard from "../../components/ServiceCard";

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  learnMoreContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(-2.5),
  }
}));

function Home(props) {
  const { userFirstName, isFetchingPartners, suggestedByKey } = props;
  const classes = styles();
  const { t } = useLanguage();
  const { spacing } = useTheming();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartners());
  }, [])

  // for react-loadable
  const imageKeyMap = {
    godaddy: require('../../assets/images/azure.jpg'),
    office_365: require('../../assets/images/azure.jpg'),
    intuit: require('../../assets/images/azure.jpg'),
    shopify: require('../../assets/images/azure.jpg'),
    moka_pos: require('../../assets/images/azure.jpg'),
    wework: require('../../assets/images/azure.jpg'),
    food_panda: require('../../assets/images/azure.jpg'),
    red_mart: require('../../assets/images/azure.jpg'),
    shopback: require('../../assets/images/azure.jpg'),
  }

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
                <Paper>
                  <CardContent>
                    <Typography variant="h5">
                      <b>{t(`home.balance`)}</b>
                    </Typography>
                    <Spacing height={2} />
                    <div className={classes.balanceTextContainer}>
                      <Typography color="primary" variant="h2">
                        <b>{formatNumber('2000')}</b>
                      </Typography>
                      <Spacing width={1} />
                      <div style={{ marginBottom: spacing(1) }}>
                        <Typography color="textPrimary" variant="h6">{t('currency.sgd')}</Typography>
                      </div>
                    </div>
                    <Spacing height={2} />
                    <div className={classes.learnMoreContainer}>
                      <Button color="primary">
                        {t('home.learn_more')}
                      </Button>
                    </div>
                  </CardContent>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper>
                  <CardContent>
                    <Typography variant="h5">
                      <b>{t(`home.spending`)}</b>
                    </Typography>
                    <Spacing height={2} />
                    <div className={classes.balanceTextContainer}>
                      <Typography color="primary" variant="h2">
                        <b>{formatNumber('0')}</b>
                      </Typography>
                      <Spacing width={1} />
                      <div style={{ marginBottom: spacing(1) }}>
                        <Typography color="textPrimary" variant="h6">{t('currency.sgd')}</Typography>
                      </div>
                    </div>
                    <Spacing height={2} />
                    <div className={classes.learnMoreContainer}>
                      <Button color="primary">
                        {t('home.learn_more')}
                      </Button>
                    </div>
                  </CardContent>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper>
                  <CardContent>
                    <Typography variant="h5">
                      <b>{t(`home.loan_repayments`)}</b>
                    </Typography>
                    <Spacing height={2} />
                    <div className={classes.balanceTextContainer}>
                      <Typography color="primary" variant="h2">
                        <b>{formatNumber('0')}</b>
                      </Typography>
                      <Spacing width={1} />
                      <div style={{ marginBottom: spacing(1) }}>
                        <Typography color="textPrimary" variant="h6">{'%'}</Typography>
                      </div>
                    </div>
                    <Spacing height={2} />
                    <div className={classes.learnMoreContainer}>
                      <Button color="primary">
                        {t('home.learn_more')}
                      </Button>
                    </div>
                  </CardContent>
                </Paper>
              </Grid>
            </Grid>
            <Spacing height={8} />
            {
              isFetchingPartners &&
              <Loader compact />
            }
            {
              Object.keys(suggestedByKey).map((key) => {
                const arr = Array.isArray(suggestedByKey[key]) ? suggestedByKey[key] : [];

                return (
                  <>
                    <StandardPageHeader title={t(`home.${key}`)} />
                    <Grid container direction="row">
                      {arr.map((service) => {
                        return (
                          <Grid item xs={12} sm={12} md={4} lg={3}>
                            <ServiceCard
                              title={service.name}
                              description={service.description}
                              image={imageKeyMap[service.key]}
                            />
                          </Grid>
                        )
                      })}
                    </Grid>
                  </>
                )
              })
            }
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
