import * as React from "react";
import { IInputProps } from "../../ui.interfaces";
import {
  Input,
  InputContainer,
  Label,
} from "./input.style";

import { Validator } from "bx-utils";

export default class InputComponent extends React.Component<IInputProps, {}> {

  render() {
    return (
      <InputContainer>
        <Input
          required
          type={!!this.props.isPassword ? "password" : "text"}
          value={this.props.value}
          onChange={(e: any) => this.props.change(e.target.value)} />
        <Label>{this.props.label}</Label>
      </InputContainer>
    );
  }
}
