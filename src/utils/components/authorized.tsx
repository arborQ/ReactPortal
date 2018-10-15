import { authorizeService } from "bx-services";
import { LoadingComponent } from "bx-ui";
import * as React from "react";
import { connect } from "react-redux";
import StateComponent from "../stateComponent";

interface IAuthorizedOnlyState {
  isAuthorized: boolean;
}

@authorizeService.connect()
export default class AuthorizedOnly extends StateComponent<
  {},
  IAuthorizedOnlyState
> {
  componentWillMount(): void {
    const currentUser = authorizeService.getCurrentUser();

    if (currentUser !== null) {
      this.updateState({ isAuthorized: true });
    }
  }

  stateWillChange(newState: IAuthorizedOnlyState): boolean {
    return this.state.isAuthorized !== newState.isAuthorized;
  }

  render(): JSX.Element | null {
    if (this.props.children === undefined) {
      return null;
    }

    if (!this.state.isAuthorized) {
      return this.props.children as JSX.Element;
    }

    return <LoadingComponent>Validate yours credentials ...</LoadingComponent>;
  }
}
