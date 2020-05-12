import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import recipe from "./recipe";
import cook from "./cook";

const rootReducer = (history) =>
  combineReducers({
    auth,
    recipe,
    cook,
    router: connectRouter(history),
  });

export default rootReducer;
