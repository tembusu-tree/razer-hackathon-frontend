import { combineReducers } from "redux";

import user from "./user";
import settings from "./settings";
import services from "./services";

const reducer = combineReducers({
  user,
  settings,
  services,
});

const root = (state, action) => {
  // do something globally in the root reducers

  return reducer(state, action);
};

export default root;
