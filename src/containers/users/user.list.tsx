import { GridComponent } from "bx-ui";
import { ApiComponent } from "bx-utils";
import * as React from "react";

export default class UserListComponent extends ApiComponent<any, any> {
  constructor() {
    super("/api/users");
  }

  renderContent(data: any) {
    return <GridComponent>users</GridComponent>;
  }
}
