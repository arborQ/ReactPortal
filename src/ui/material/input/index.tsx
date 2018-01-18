import { Message } from "_debugger";
import * as React from "react";
import BaseInputComponent from "../../common/input";
import {
  Input,
  InputContainer,
  Label,
  ValidationMessage,
} from "./input.elements";

import { Validator } from "bx-utils";

export default class InputComponent extends BaseInputComponent {
  renderInput() {
    return (
      <InputContainer htmlFor={this.props.name}>
        <Input
          name={this.props.name}
          id={this.props.name}
          required
          type={!!this.props.isPassword ? "password" : "text"}
          value={this.state.value}
          onBlur={() => { this.setState(Object.assign(this.state, { value: this.props.value })); }}
          onChange={(e: any) => { this.updateParent(e.target.value); }} />
        <Label htmlFor={this.props.name}>{this.props.label}</Label>
        {
          !!this.state.messages && !!this.state.messages.length
            ? <ValidationMessage>{this.state.messages.join()}</ValidationMessage>
            : null
        }
      </InputContainer>
    );
  }
}
