import { NotFound, Landing, Home, Settings, Login } from "../screens";

export const publicRoutes = [
  {
    key: "landing",
    link: "/",
    component: Landing,
  },
  {
    key: "login",
    link: "/login",
    component: Login,
  },
];

export const privateRoutes = [
  {
    key: "home",
    link: "/home",
    component: Home,
  },
  {
    key: "loans",
    link: "/loans",
  },
  {
    key: "bills",
    link: "/bills",
  },
  {
    key: "services",
    link: "/services",
  },
  {
    key: "settings",
    link: "/settings",
    component: Settings,
  },

  // not found
  {
    key: "404",
    link: "*",
    component: NotFound,
  },
];
