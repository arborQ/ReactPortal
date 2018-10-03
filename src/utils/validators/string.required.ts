import { ValidationHelper } from "./validator.helper";

export default class StringRequiredValidation implements Utils.Validation.IValidator<string> {
    validate(value: string): Promise<Utils.Validation.IValidationResult> {
        if (!value || value.length === 0) {
            return ValidationHelper.FailValidation("Field is required.");
        }

        return ValidationHelper.SuccessValidation();
    }
}
