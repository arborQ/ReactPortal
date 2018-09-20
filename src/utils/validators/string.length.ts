import StringRequiredValidation from "./string.required";
import { IValidationResult, IValidator, ValidationHelper } from "./validator.interfaces";

export default class StringLengthValidation extends StringRequiredValidation {
    constructor(private minLength: number, private maxLength?: number) {
        super();
    }

    validate(value: string): Promise<IValidationResult> {
        return super.validate(value)
        .then((result) => {
            if (value.length < this.minLength) {
                return ValidationHelper.FailValidation(`Text can't be shorter than ${this.minLength}`);
            }

            if (!!this.maxLength && value.length > this.maxLength) {
                return ValidationHelper.FailValidation(`Text can't be longer than ${this.maxLength}`);
            }

            return ValidationHelper.SuccessValidation();
        });
    }
}
