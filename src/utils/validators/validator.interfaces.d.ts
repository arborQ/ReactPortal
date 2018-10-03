declare namespace Utils.Validation {
    export type Validatable = string | number | boolean | Date;
    export interface IValidationResult {
        isValid: boolean;
        messages?: string[];
    }
    
    export interface IValidator<T extends Validatable | IValidator<Validatable>> {
        validate(model: T): Promise<IValidationResult>;
    }
}
