export interface IValidationResult {
    isValid: boolean;
    messages?: string | string[];
}

// export type IValidator<T> = (value: T) => Promise<IValidationResult>;

export interface IValidator<T> {
    validate(model: T): Promise<IValidationResult>;
}

export class ValidationHelper {
    static SuccessValidation(): Promise<IValidationResult> {
        return Promise.resolve({ isValid: true });
    }

    static FailValidation(messages: string | string[]): Promise<IValidationResult> {
        return Promise.reject({ isValid: false, messages });
    }
}
