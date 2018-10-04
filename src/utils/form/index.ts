export type FormFields<TModel> = { [P in keyof TModel]: Utils.Forms.IFormElement };

export class FormService<TModel> implements Utils.Forms.IFormElement<TModel> {
  get isValueValid(): boolean {
    for (let item in this.items) {
      const itemRule = this.items[item];

      if (itemRule !== undefined && !itemRule.isValueValid) {
        return false;
      }
    }

    return true;
  }

  get isValueChanged(): boolean {
    for (let item in this.items) {
      const itemRule = this.items[item];

      if (itemRule !== undefined && itemRule.isValueChanged) {
        return true;
      }
    }

    return false;
  }

  constructor(
    public value: TModel,
    public onValueChange: Utils.Forms.ValueChangeAction<TModel>,
    public onValidationError: (errorMessages: string[]) => void
  ) {}

  items: FormFields<TModel>;

  registerFields(formFields: FormFields<TModel> | {}): void {
    for (let item in this.items) {
      const itemRule = this.items[item];

      if (itemRule !== undefined) {
        this.items[item] = {
          ...(itemRule as any),
          onValueChange: (v) => {
            // this.value[item] = v;
            itemRule.onValueChange(v);
            this.onValueChange(this.value);
          }
        };
      }
    }
  }

  get isValid(): boolean {
    return true;
  }
}
