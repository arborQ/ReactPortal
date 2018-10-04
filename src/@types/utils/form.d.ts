declare namespace Utils.Forms {
    export interface IFormElement<T = Utils.Validation.Validatable> {
        value: T;
        onValueChange: ValueChangeAction<T>;
        onValidationError: (errorMessages: string[]) => void;
        isValueValid: boolean;
        isValueChanged: boolean;
    }

    export type ValueChangeAction<T> = (newValue: T) => Promise<T> | void;
}
