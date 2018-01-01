import * as React from "react";
import assign from "./assign";

export default abstract class StateComponent<P, S> extends React.Component<P, S> {

  constructor(initialState: Partial<S> = {}) {
    super();
    this.state = initialState as S;
  }

  updateState(newState: Partial<S>): Promise<S> {
    return new Promise<any>((resolve) => {
      const calculatedState: S = assign(this.state, newState);
      if (!this.stateWillChange(calculatedState)) {
        resolve(this.state);
      }

      this.setState(calculatedState, () => { resolve(this.state); });
    });
  }

  stateWillChange(newState: S): boolean {
    return JSON.stringify(this.state) === JSON.stringify(newState);
  }

  shouldComponentUpdate(nextProps: P, nextState: S): boolean {
    return this.stateWillChange(nextState);
  }
}
