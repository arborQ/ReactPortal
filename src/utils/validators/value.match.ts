import { IValidationResult, IValidator, ValidationHelper } from "./validator.interfaces";

export default class ValueMatchValidation<T> implements IValidator<T> {
    constructor(private resolver: () => T, private equals?: (a: T, b: T) => boolean) {}

    validate(value: T): Promise<IValidationResult> {
        const compareValue = this.resolver();
        const equalFunction = this.equals || this.defaultEqual;

        if (equalFunction(value, compareValue)) {
            return ValidationHelper.SuccessValidation();
        }

        return ValidationHelper.FailValidation("Values doesn't mach");
    }

    private defaultEqual(a: T, b: T): boolean {
        return a === b;
    }
}
