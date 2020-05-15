import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import root from "./reducers";

const devtools =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

const store = createStore(root, compose(applyMiddleware(thunk), devtools));

export default store;
