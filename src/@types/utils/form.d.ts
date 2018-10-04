declare namespace Utils.Forms {
    export interface IFormElement<T = Utils.Validation.Validatable> {
        onValueChange: ValueChangeAction<T>;
        onValidationError: (errorMessages: string[]) => void;
        isValueValid: boolean;
        isValueChanged: boolean;
        changeAction: (model: T) => Promise<T> | void;
    }

    export type ValueChangeAction<T> = (newValue: T) => Promise<T> | void;
}
