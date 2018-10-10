import { AsyncComponent } from "bx-utils";
import * as React from "react";
import { Provider } from "react-redux";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from "react-router";
import Header from "./header";

import { AuthorizeComponent, AuthorizeUrl } from "../authorize";
import { UsersListComponent, UsersUrl } from "../users";

import IndexComponent from "../indexComponent";
import store from "../authorize/store";

class HomeContainer extends React.Component<
  RouteComponentProps<any> | any,
  {}
> {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header {...this.props as any} />
          <div style={{ paddingTop: 10 }}>
            <Switch>
              <Route
                exact
                path="/"
                component={AsyncComponent(
                  async () => (await import("./home.component")).default
                )}
              />
              <Route path={AuthorizeUrl} component={AuthorizeComponent} />
              <Route path={UsersUrl} component={UsersListComponent} />
              <Route component={IndexComponent} />
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}

export default withRouter(HomeContainer);
