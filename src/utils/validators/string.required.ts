import { IValidationResult, IValidator, ValidationHelper } from "./validator.interfaces";

export default class StringRequiredValidation implements IValidator<string> {
    validate(value: string): Promise<IValidationResult> {
        if (!value || value.length === 0) {
            return ValidationHelper.FailValidation("Field is required.");
        }

        return ValidationHelper.SuccessValidation();
    }
}
