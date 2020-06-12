import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/Index";
import Root from "./components/Root";
import { Provider } from "react-redux";
import store, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./utils/global";
import theme from "./utils/theme";
import * as serviceWorker from "./serviceWorker";

import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} history={history}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Root />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
