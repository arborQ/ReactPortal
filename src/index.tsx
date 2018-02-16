import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./containers/home";

import ServiceWorker from "./serviceWorker";

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root"),
);

ServiceWorker();
