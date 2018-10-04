import { SelectMany } from "bx-utils";

export default class InputFormElement
  implements Utils.Forms.IFormElement<string> {
  isValueValid: boolean;
  isValueChanged: boolean;
  validators: Array<Utils.Validation.IValidator<string>>;

  constructor(
    public value: string,
    public onValueChange: Utils.Forms.ValueChangeAction<string>,
    public onValidationError: (errorMessages: string[]) => void,
    ...validators: Array<Utils.Validation.IValidator<string>>
  ) {
    this.isValueValid = true;
    this.isValueChanged = false;
    this.validators = validators;
  }

  private valueChange(currentValue: string): void {
    this.isValueChanged = false;
    Promise.all(this.validators.map(v => v.validate(currentValue))).then(
      results => {
        const invalidReults = results.filter(r => !r.isValid);
        this.isValueValid = invalidReults.length === 0;

        if (this.isValueValid) {
          this.onValueChange(currentValue);
          this.value = currentValue;
        } else {
          const messages = SelectMany(invalidReults, r => r.message);
          this.onValidationError(messages);
        }
      }
    );
  }

  get htmlProps(): React.InputHTMLAttributes<HTMLInputElement> {
    return {
      value: this.value,
      onChange: e => {
        const currentValue = e.currentTarget.value;
        this.valueChange(currentValue);
      }
    };
  }

  get uiProps(): Partial<Ui.Input.IProps> {
    return {
      change: (currentValue: string) => {
        return this.valueChange(currentValue);
      }
    };
  }
}
