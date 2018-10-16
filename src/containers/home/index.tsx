import store from "bx-store";
import { AsyncComponent } from "bx-utils";
import * as React from "react";
import { Provider } from "react-redux";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";
import { AuthorizeComponent } from "../authorize";
import IndexComponent from "../indexComponent";
import { UsersListComponent } from "../users";
import Header from "./header";

const AuthorizeUrl = "/authorize/login";
const UsersUrl = "/users/list";

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
