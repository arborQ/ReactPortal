import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./containers/home";

import { subscribeUser } from "./serviceWorker";

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root"),
);

subscribeUser("BK8VqNWibY8XBMsCD5ZdHxlxHtZ28P6wTiJJA4G-aPuMgy6wT7AZJxcEufqit2Hux9AdVT3AE5zwgE9FkJjFMfc");
