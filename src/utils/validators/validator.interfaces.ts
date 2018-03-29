export interface IValidationResult {
    isValid: boolean;
    messages?: string[];
}

export interface IValidator<T> {
    validate(model: T): Promise<IValidationResult>;
}

export class ValidationHelper {
    static SuccessValidation(): Promise<IValidationResult> {
        return Promise.resolve({ isValid: true });
    }

    static FailValidation(messages: string | string[]): Promise<IValidationResult> {
        return Promise.reject({ isValid: false, messages: Array.isArray(messages) ? messages : [ messages ] });
    }
}
