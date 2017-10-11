import * as React from "react";
import { IInputProps, IInputState } from "../../ui.interfaces";
import {
  Input,
  InputContainer,
  Label,
} from "./input.style";

import { Validator } from "bx-utils";

export default class InputComponent extends React.Component<IInputProps, IInputState> {
  constructor() {
    super();
    this.state = { value: "", isValid: true, working: false };
  }
  componentDidMount() {
    this.updateParent(this.props.value);
  }

  updateParent(value: string) {
    this.setState(Object.assign(this.state, { value, working: !!this.props.validator }));

    if (!!this.props.validator) {
      this.props.validator.validate(value)
        .then((result) => {
          this.setState(Object.assign(this.state, { isValid: true, working: false }));
        }).catch(() => {
          this.setState(Object.assign(this.state, { isValid: false, working: false }));
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
          onChange={(e: any) => this.updateParent(e.target.value)} />
        <Label>{this.props.label}</Label>
      </InputContainer>
    );
  }
}
