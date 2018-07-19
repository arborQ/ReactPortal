import { IValidationResult, IValidator, ValidationHelper } from "./validator.interfaces";

export default class CombineValidation<T> implements IValidator<T> {
    constructor(private validators: Array<IValidator<T>>) {

    }

    validate(value: T): Promise<IValidationResult> {
        return Promise.all(this.validators.map((validator) => validator.validate(value)))
        .then((results) => {
            return ValidationHelper.SuccessValidation();
        })
        .catch((result: IValidationResult) => {
            return ValidationHelper.FailValidation((result.messages || []).join(" "));
        });
    }
}
