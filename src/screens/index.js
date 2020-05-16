import Loadable from "react-loadable";
import Loader from "./Loader";

const Login = Loadable({
  loader: () => import("./Login"),
  loading: Loader,
});

const Home = Loadable({
  loader: () => import("./Home"),
  loading: Loader,
});

const Settings = Loadable({
  loader: () => import("./Settings"),
  loading: Loader,
});

const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loader,
});

const Landing = Loadable({
  loader: () => import("./Landing"),
  loading: Loader,
});

const Register = Loadable({
  loader: () => import("./Register"),
  loading: Loader,
});

const BusinessProfile = Loadable({
  loader: () => import("./BusinessProfile"),
  loading: Loader,
});

const ApplyLoan = Loadable({
  loader: () => import("./ApplyLoan"),
  loading: Loader,
});

const ApplyLoanRequest = Loadable({
  loader: () => import('./ApplyLoanRequest'),
  loading: Loader,
})

const ApplyLoanSuccess = Loadable({
  loader: () => import('./ApplyLoanSuccess'),
  loading: Loader,
})

export {
  Home,
  Register,
  ApplyLoan,
  ApplyLoanRequest,
  ApplyLoanSuccess,
  BusinessProfile,
  Landing,
  Login,
  Settings,
  NotFound,
};
