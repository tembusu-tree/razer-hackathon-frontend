import React from "react";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import StandardPageHeader from "../../components/StandardPageHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useLanguage from "../../utils/hooks/useLanguage";
import Spacing from "../../components/Spacing";
import Button from "@material-ui/core/Button";

// TODO: create a component to handle this pls
const partnerList = [
  {
    key: "singtel",
    logo: require("../../assets/images/singtel.jpg"),
  },
  {
    key: "starhub",
    logo: require("../../assets/images/starhub.jpg"),
  },
  {
    key: "azure",
    logo: require("../../assets/images/azure.jpg"),
  },
  {
    key: "aws",
    logo: require("../../assets/images/aws.png"),
  },
];

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
  cardItemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  itemImageContainer: {
    objectFit: "cover",
  },
  cardContainer: {
    height: "100%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function Introduction() {
  const classes = styles();
  const { t } = useLanguage();

  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Fade in>
          <div className={classes.contentContainer}>
            <Spacing height={6} />
            <StandardPageHeader title={t("pay_bills.title")} />
            <Grid container alignItems="stretch" spacing={3}>
              {partnerList.map((item) => (
                <Grid key={item.key} item xs={12} sm={4} md={4} lg={3}>
                  <Card className={classes.cardContainer}>
                    <div className={classes.cardItemContainer}>
                      <img
                        width={"100%"}
                        height={"100%"}
                        alt={item.key}
                        className={classes.itemImage}
                        src={item.logo}
                      />
                    </div>
                    <CardContent>
                      <Typography variant="subtitle1">
                        <b>{t(`pay_bills.${item.key}`)}</b>
                      </Typography>
                      <Typography variant="body1">
                        {t(`pay_bills.${item.key}_description`)}
                      </Typography>
                    </CardContent>
                    <div className={classes.buttonContainer}>
                      <Button variant="text" color="primary">
                        {t("pay_bills.start_now")}
                      </Button>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Fade>
      </Container>
    </div>
  );
}

export default Introduction;
