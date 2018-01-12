import { Validator } from "bx-utils";

export interface IInputProps {
    name?: string;
    value: string;
    isPassword?: boolean;
    label: string;
    change: (value: string) => void | Promise<any>;
    delay?: number;
    validator?: Validator.ValidatorInterfaces.IValidator<string>;
}

export interface IInputState {
    value: string;
    isValid: boolean;
    working: boolean;
    messages?: string[];
}

// declare namespace UI.Button {
//     export interface IButtonProps {
//         label: string;
//         click?: () => void | Promise<any>;
//       }
      
//       export interface IButtonState {
//         working: boolean;
//       }
      
// }