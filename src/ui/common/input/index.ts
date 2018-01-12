import { Message } from "_debugger";
import { Validator } from "bx-utils";
import * as React from "react";

export default abstract class InputComponent extends React.Component<Ui.Input.IProps, Ui.Input.IState> {
  constructor() {
    super();
    this.state = { value: "", isValid: true, working: false };
  }
  componentDidMount() {
    this.updateParent(this.props.value, true);
  }

  updateParent(value: string, silent: boolean = false) {
    this.setState(Object.assign(this.state, { value, working: !!this.props.validator }));
    if (!silent) {
      this.props.change(value);
    }

    if (!!this.props.validator) {
      this.props.validator.validate(value)
        .then((result) => {
          this.setState(Object.assign(this.state, { isValid: true, working: false, messages: [] }));
        }).catch((result: Validator.ValidatorInterfaces.IValidationResult) => {
          this.setState(Object.assign(this.state, { isValid: false, working: false, messages: [...result.messages] }));
        });
    }
  }

  render() {
    return (
      this.renderInput()
    );
  }

  protected abstract renderInput(): JSX.Element;
}
