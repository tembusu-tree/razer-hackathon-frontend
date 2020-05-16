import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import { isPublicRoute } from "../../utils/routes";
import useLanguage from "../../utils/hooks/useLanguage";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Box from "@material-ui/core/Box";
import useTheming from "../../utils/hooks/useTheming";
import { generateRandomImageURL } from "../../utils/common";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.dashboard.hoverColor,
    },
  },
  activeListItem: {
    backgroundColor: theme.palette.dashboard.activeColor,
  },
  drawerContentContainer: {
    minWidth: drawerWidth,
    height: "100%",
    display: "flex",
    alignContent: "space-between",
    flexDirection: "column",
    backgroundColor: theme.palette.dashboard.backgroundColor,
    paddingTop: 8,
  },
  navListContainer: {
    flex: 1,
  },
  drawerPaper: {
    backgroundImage: `url(${generateRandomImageURL()})`,
    backgroundSize: "cover",
    borderRight: 0,
  },
  navText: {
    color: theme.palette.dashboard.textColor,
  },
}));

function NavigationDrawer(props) {
  const { navItems } = props;

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { spacing } = useTheming();
  const { t } = useLanguage();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  if (isPublicRoute(location.pathname)) {
    return null;
  }

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onPressNavLink = (link) => {
    if (location.pathname !== link) {
      history.push(link);
    }
  };

  const content = (
    <div className={classes.drawerContentContainer}>
      <Box
        marginTop={3}
        marginBottom={4}
        marginLeft={-1}
        justifyContent="center"
        display="flex"
      >
        <Logo width={spacing(10)} height={spacing(10)} />
      </Box>
      <div className={classes.navListContainer}>
        <List>
          {navItems.map((item) => {
            const key = item.key ? item.key : null;
            const link = item.link ? item.link : null;

            if (!key || !link || item.nonNav) {
              return null;
            }

            const isActive =
              link === "/"
                ? location.pathname === link
                : location.pathname.startsWith(link);

            return (
              <ListItem
                button
                onClick={() => {
                  onPressNavLink(link);
                }}
                className={clsx(
                  isActive && classes.activeListItem,
                  classes.listItem
                )}
                key={key}
              >
                <ListItemText className={classes.navText}>
                  {t(`nav.${key}`)}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden xsDown>
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          open={true}
          ModalProps={{ keepMounted: true }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <SwipeableDrawer
          classes={{ paper: classes.drawerPaper }}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={isDrawerOpen}
          onClose={handleDrawer}
          onOpen={handleDrawer}
        >
          {content}
        </SwipeableDrawer>
      </Hidden>
    </nav>
  );
}

export default NavigationDrawer;
