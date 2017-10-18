import { GridComponent } from "bx-ui";
import { ApiComponent } from "bx-utils";
import * as React from "react";

export default class UserListComponent extends React.Component<any, any> {
  render() {
    return (
      <ApiComponent
        loadUrl="/api/users"
        content={(data: any[]) =>
        null
        } />);
  }
}
