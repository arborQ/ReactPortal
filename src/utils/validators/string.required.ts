import { IValidationResult, IValidator, ValidationHelper } from "./validator.interfaces";

const requireValidator: IValidator<string> = (value: string): Promise<IValidationResult> => {
    if (!value || value.length === 0) {
        return ValidationHelper.FailValidation("Field is required.");
    }

    return ValidationHelper.SuccessValidation();
};

export default requireValidator;
