import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useLanguage from "../../utils/hooks/useLanguage";
import Spacing from "../Spacing";

const styles = makeStyles(() => ({
  buttonContainer: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  cardItemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  itemImageContainer: {
    objectFit: "cover",
  },
  card: {
    height: "100%",
  },
}));

function ServiceCard({ image = null, title = "", description = "" }) {
  const classes = styles();
  const { t } = useLanguage();

  return (
    <Card className={classes.card}>
      <div className={classes.cardItemContainer}>
        <img
          width={"100%"}
          height={"100%"}
          alt={title}
          className={classes.itemImage}
          src={image}
        />
      </div>
      <CardContent className={classes.card}>
        <Typography variant="h6">
          <b>{title}</b>
        </Typography>
        <Typography variant="caption">{description}</Typography>
        <Spacing height={3} />
      </CardContent>
      <div className={classes.buttonContainer}>
        <Button color="primary">{t("home.learn_more")}</Button>
      </div>
    </Card>
  );
}

export default ServiceCard;
