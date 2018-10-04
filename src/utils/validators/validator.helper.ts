export class ValidationHelper {
    static SuccessValidation(): Promise<Utils.Validation.IValidationResult> {
        return Promise.resolve({ isValid: true, message: "" });
    }

    static FailValidation(messages: string | string[]): Promise<Utils.Validation.IValidationResult> {
        return Promise.reject({ isValid: false, message: Array.isArray(messages) ? messages.join(", ") : messages });
    }
}
