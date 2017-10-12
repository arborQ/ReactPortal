import { Message } from "_debugger";
import * as React from "react";
import { IInputProps, IInputState } from "../../ui.interfaces";
import {
  Input,
  InputContainer,
  Label,
  ValidationMessage,
} from "./input.style";

import { Validator } from "bx-utils";

export default class InputComponent extends React.Component<IInputProps, IInputState> {
  constructor() {
    super();
    this.state = { value: "", isValid: true, working: false };
  }
  componentDidMount() {
    this.updateParent(this.props.value, true);
  }

  componentWillReceiveProps(nextProps: IInputProps) {
    // this.updateParent(this.props.value, true);
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
      <InputContainer>
        <Input
          required
          type={!!this.props.isPassword ? "password" : "text"}
          value={this.state.value}
          onBlur={() => { this.setState(Object.assign(this.state, { value: this.props.value }));  }}
          onChange={(e: any) => this.updateParent(e.target.value)} />
        <Label>{this.props.label}</Label>
        {
          !!this.state.messages && !!this.state.messages.length
          ? <ValidationMessage>{ this.state.messages.join() }</ValidationMessage>
          : null
        }
      </InputContainer>
    );
  }
}
