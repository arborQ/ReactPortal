import { Assign } from "bx-utils";
import * as React from "react";
import CommonButton from "../../common/button";
import { Button } from "./button.elements";

export default class ButtonComponent extends CommonButton {
  renderButton(renderProps: Ui.Button.IRenderProps): JSX.Element {
    return (
      <Button
        type={renderProps.type}
        disabled={renderProps.disabled}
        onClick={$event => {
          if (renderProps.type !== "submit") {
            $event.preventDefault();
            $event.stopPropagation();
          }

          renderProps.onClick();
        }}
      >
        <span>{renderProps.text}</span>
      </Button>
    );
  }
}
