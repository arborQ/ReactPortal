import * as React from "react";
import { RouteComponentProps } from "react-router";
import ScrollComponent from "./scrollContainer";
class ScrollContainer extends React.Component<RouteComponentProps<any> | any, {}> {
  render() {
    return (
      <div>
        <ScrollComponent />
      </div>
    );
  }
}

export default ScrollContainer;
