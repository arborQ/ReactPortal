import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { injectGlobal } from "styled-components";
import Home from "./containers/home";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    font-size: 12px;
  }
  body, input, span, div, button {
    font-family: Montserrat,sans-serif;
  }
`;

const history = createBrowserHistory();

ReactDOM.render(
	<BrowserRouter>
		<Home />
	</BrowserRouter>,
	document.getElementById("root")
);
