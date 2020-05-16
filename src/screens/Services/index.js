import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import Grid from "@material-ui/core/Grid";
import StandardPageHeader from "../../components/StandardPageHeader";
import useLanguage from "../../utils/hooks/useLanguage";
import Spacing from "../../components/Spacing";
import { connect, useDispatch } from "react-redux";
import Loader from "../Loader";
import ServiceCard from "../../components/ServiceCard";
import { getPartners } from "../../redux/actions/services";

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

function Services(props) {
  const classes = styles();
  const { t } = useLanguage();
  const { allPartners, isFetching } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartners());
  }, []);

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
      <Helmet>
        <title>{t("nav.services")}</title>
      </Helmet>
      <Fade in>
        <Container maxWidth="md">
          <Spacing height={4} />
          <StandardPageHeader title={t("nav.services")} />
          <Spacing height={3} />
          {isFetching && (
            <>
              <Loader compact />
              <Spacing height={3} />
            </>
          )}
          <Grid container spacing={2}>
            {allPartners.map((service) => (
              <Grid key={service.name} item xs={12} sm={12} md={4} lg={3}>
                <ServiceCard
                  title={service.name}
                  description={service.description}
                  image={imageKeyMap[service.key]}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { allPartners, isFetchingPartners } = state.services;
  return { allPartners, isFetching: isFetchingPartners };
};

export default connect(mapStateToProps)(Services);
