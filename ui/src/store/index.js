import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export const history = createBrowserHistory();

function configureStore(initialState) {
  // connected react router
  const reactRouterMiddleware = routerMiddleware(history);

  // create logger
  const logger = createLogger();

  const middlewares = [thunk, logger, reactRouterMiddleware];

  const store = createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  // return store
  return store;
}

// create store
const store = configureStore();

// export store to the app
export default store;
