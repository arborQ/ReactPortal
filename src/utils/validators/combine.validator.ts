import { ValidationHelper } from "./validator.helper";

export default class CombineValidation<T extends Utils.Validation.Validatable>
    implements Utils.Validation.IValidator<T> {
    constructor(private validators: Array<Utils.Validation.IValidator<T>>) {

    }

    validate(value: T): Promise<Utils.Validation.IValidationResult> {
        return Promise.all(this.validators.map((validator) => validator.validate(value)))
            .then((results) => {
                return ValidationHelper.SuccessValidation();
            })
            .catch((result: Utils.Validation.IValidationResult) => {
                return ValidationHelper.FailValidation(result.message);
            });
    }
}
