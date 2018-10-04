declare namespace Utils.Validation {
    export type Validatable = string | number | boolean | Date | object;
    export interface IValidationResult {
        isValid: boolean;
        message: string;
    }
    
    export interface IValidator<T = Validatable | IValidator<Validatable>> {
        validate(model: T): Promise<IValidationResult>;
    }
}
