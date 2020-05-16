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

export { Home, Register, Landing, Login, Settings, NotFound };
