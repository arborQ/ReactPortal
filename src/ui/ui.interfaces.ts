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
