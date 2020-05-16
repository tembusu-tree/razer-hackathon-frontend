import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { lightTheme } from "./config/theme";
import { privateRoutes, publicRoutes } from "./config/routes";
import NavigationDrawer from "./components/NavigationDrawer";

import { Helmet } from "react-helmet";
import { HashRouter, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CustomRoute from "./components/CustomRoute";
import { loadTranslations } from "./services/translation";

const styles = makeStyles(() => ({
  app: {
    whiteSpace: "pre-line",
  },
  pageContainer: {
    display: "flex",
  },
  pageContent: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = styles();
  loadTranslations().then((t) => {
    console.log(t("nav.home"));
  });

  return (
    <div className={classes.app}>
      <ThemeProvider theme={lightTheme}>
        <div className={classes.pageContainer}>
          <HashRouter>
            <NavigationDrawer navItems={privateRoutes} useReactRouter />
            <main className={classes.pageContent}>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Tembusu Tree</title>
              </Helmet>
              <Switch>
                {publicRoutes.map((options, i) => {
                  if (!options.component) {
                    return null;
                  }

                  const Component = options.component;

                  return (
                    <CustomRoute
                      key={i.toString()}
                      exact={
                        options.link === "/" || options.link === "/register"
                      }
                      path={options.path || options.link}
                    >
                      <Component />
                    </CustomRoute>
                  );
                })}
                {privateRoutes.map((options, i) => {
                  if (!options.component) {
                    return null;
                  }

                  const Component = options.component;

                  return (
                    <CustomRoute
                      key={i.toString()}
                      privateRoute
                      path={options.path || options.link}
                    >
                      <Component />
                    </CustomRoute>
                  );
                })}
              </Switch>
            </main>
          </HashRouter>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
