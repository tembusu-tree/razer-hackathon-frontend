import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import root from "./reducers";

let store;

const devtools =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

if (devtools) {
  store = createStore(root, compose(applyMiddleware(thunk), devtools));
} else {
  store = createStore(root, compose(applyMiddleware(thunk)));
}

export default store;
