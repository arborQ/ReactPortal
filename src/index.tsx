import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Home from './containers/home';
import { BrowserRouter } from 'react-router-dom';

const history = createBrowserHistory();
console.log('BrowserRouter', BrowserRouter);
ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);
