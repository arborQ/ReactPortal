export class ValidationHelper {
    static SuccessValidation(): Promise<Utils.Validation.IValidationResult> {
        return Promise.resolve({ isValid: true });
    }

    static FailValidation(messages: string | string[]): Promise<Utils.Validation.IValidationResult> {
        return Promise.reject({ isValid: false, messages: Array.isArray(messages) ? messages : [messages] });
    }
}
