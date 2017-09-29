import { Validator } from "bx-utils";

export interface IInputProps {
    value: string;
    isPassword?: boolean;
    label: string;
    change: (value: string) => void | Promise<any>;
    delay?: number;
    validator?: Validator.ValidatorInterfaces.IValidator<string>;
}
