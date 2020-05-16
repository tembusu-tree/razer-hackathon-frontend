import {
  NotFound,
  Landing,
  Home,
  Settings,
  Login,
  Register,
  BusinessProfile,
  ApplyLoan,
  ApplyLoanRequest,
  ApplyLoanSuccess,
  PayBills,
} from "../screens";

export const publicRoutes = [
  {
    key: "landing",
    link: "/",
    component: Landing,
    exact: true,
  },
  {
    key: "login",
    link: "/login",
    component: Login,
  },
  {
    key: "register",
    link: "/register",
    component: Register,
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
    component: ApplyLoan,
    exact: true,
  },
  {
    key: "loans_request",
    link: "/loans/request",
    component: ApplyLoanRequest,
    nonNav: true,
    exact: true,
  },
  {
    key: "loans_request_success",
    link: "/loans/request/success",
    component: ApplyLoanSuccess,
    nonNav: true,
    exact: true,
  },
  {
    key: "bills",
    link: "/bills",
    component: PayBills,
  },
  {
    key: "rewards",
    link: "/rewards",
  },
  {
    key: "services",
    link: "/services",
  },
  {
    key: "business_profile",
    link: "/business/profile",
    component: BusinessProfile,
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
    nonNav: true,
  },
];
