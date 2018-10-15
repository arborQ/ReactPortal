import * as React from "react";
import assign from "./assign";

export default abstract class StateComponent<P, S> extends React.Component<P, S> {
  protected isComponentMounted = true;
  constructor(initialState: Partial<S> = {}) {
    super();
    this.state = initialState as S;
  }

  updateState(newState: Partial<S>): Promise<S> {
    return new Promise<any>((resolve, reject) => {
      if (!this.isComponentMounted) {
        reject();
      } else {
        const calculatedState: S = Object.assign({}, this.state, newState);
        if (!this.stateWillChange(calculatedState)) {
          resolve(this.state);
        }

        this.setState(calculatedState, () => { resolve(this.state); });
      }
    });
  }

  componentWillUnmount(): void {
    this.isComponentMounted = false;
  }

  stateWillChange(newState: S): boolean {
    return JSON.stringify(this.state) !== JSON.stringify(newState);
  }

  propsWillChange(newProps: P): boolean {
    return JSON.stringify(this.props) !== JSON.stringify(newProps);
  }

  shouldComponentUpdate(nextProps: P, nextState: S): boolean {
    return this.stateWillChange(nextState) || this.propsWillChange(nextProps);
  }
}
