import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import useLanguage from "../../utils/hooks/useLanguage";
import Spacing from "../../components/Spacing";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as ShareLogo } from "../../assets/icons/sharedata.svg";
import { useHistory } from "react-router-dom";
import useTheming from "../../utils/hooks/useTheming";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
  },
  cardItemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  itemImageContainer: {
    objectFit: "cover",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLoadingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

function LinkingModal({
  open = false,
  onClose = () => {},
  platform = "shopee",
  logo = null,
  onConfirm = () => {},
}) {
  const { t } = useLanguage();
  const { spacing } = useTheming();
  const classes = styles();

  return (
    <Dialog open={open} onClose={onClose} className={classes.modalContainer}>
      <DialogContent>
        <Spacing height={3} />
        <Grid
          justify="center"
          alignItems="center"
          spacing={4}
          container
          direction="row"
        >
          <Grid item>
            <Logo height={spacing(10)} width={spacing(10)} />
          </Grid>
          <Grid item>
            <ShareLogo height={spacing(5)} width={spacing(5)} />
          </Grid>
          <Grid item>
            <img src={logo} height={spacing(10)} width={spacing(10)} />
          </Grid>
        </Grid>
      </DialogContent>
      <Spacing height={2} />
      <DialogTitle>
        {t("apply_loan.modal_title", { key: platform })}
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t("apply_loan.cancel")}
        </Button>
        <Button onClick={() => onConfirm(platform)} color="primary" autoFocus>
          {t("apply_loan.allow")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ApplyLoan() {
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState("lazada");
  const classes = styles();
  const { t } = useLanguage();
  const history = useHistory();
  const { spacing } = useTheming();

  //TOOD: reimplement this into O(1)
  const onPressCheckbox = (key) => {
    const set = new Set(selected);
    if (set.has(key)) {
      set.delete(key);
    } else {
      setSelectedKey(key);
      setIsModalOpen(true);
    }
    setSelected([...set]);
  };

  const addKey = (key) => {
    const set = new Set(selected);
    set.add(key);
    setSelected([...set]);
  };

  function onPressNext() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push({
        pathname: "/loans/request",
        state: { selected },
      });
    }, 2000);
  }

  // this is put here for optimization
  // check react-loadable
  const dataPartners = [
    {
      key: "lazada",
      logo: require("../../assets/images/lazada.png"),
    },
    {
      key: "carousell",
      logo: require("../../assets/images/carousell.png"),
    },
    {
      key: "shopee",
      logo: require("../../assets/images/shopee.jpg"),
    },
    {
      key: "qoo_ten",
      logo: require("../../assets/images/qoo10.png"),
    },
    {
      key: "starhub",
      logo: require("../../assets/images/starhub.jpg"),
    },
    {
      key: "singtel",
      logo: require("../../assets/images/singtel.jpg"),
    },
    {
      key: "razer_pay",
      logo: require("../../assets/images/razerpay.jpg"),
    },
    {
      key: "grab_pay",
      logo: require("../../assets/images/grabpay.png"),
    },
  ];

  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Fade in>
          <Paper elevation={0}>
            <CardContent>
              <Typography variant="h5">
                <b>{t("apply_loan.title")}</b>
              </Typography>
              <Spacing height={4} />
              <Grid container spacing={2}>
                {dataPartners.map((item) => {
                  return (
                    <Grid key={item.key} item xs={6} sm={4} md={3} lg={2}>
                      <Card onClick={() => onPressCheckbox(item.key)}>
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
                            {t(`apply_loan.${item.key}`)}
                          </Typography>
                        </CardContent>
                        <Box marginLeft={0.5} marginBottom={0.5}>
                          <Checkbox
                            onClick={() => onPressCheckbox(item.key)}
                            checked={selected.includes(item.key)}
                            color="primary"
                          />
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </CardContent>
            <Spacing height={3} />
            <div className={classes.buttonContainer}>
              <Box marginRight={2}>
                <div className={classes.buttonLoadingContainer}>
                  {loading && (
                    <CircularProgress color="primary" size={spacing(2)} />
                  )}
                  <Spacing width={1} />
                  <Button
                    color="primary"
                    variant="contained"
                    disabled={loading}
                    onClick={onPressNext}
                  >
                    {t("apply_loan.next")}
                  </Button>
                </div>
              </Box>
            </div>
            <Spacing height={2} />
          </Paper>
        </Fade>
      </Container>
      <LinkingModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        platform={selectedKey}
        logo={dataPartners.find((item) => item.key === selectedKey).logo}
        onConfirm={(key) => {
          addKey(key);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}

export default ApplyLoan;
