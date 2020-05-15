import { combineReducers } from "redux";

import user from "./user";
import settings from "./settings";

const reducer = combineReducers({
  user,
  settings,
});

const root = (state, action) => {
  // do something globally in the root reducers

  return reducer(state, action);
};

export default root;
