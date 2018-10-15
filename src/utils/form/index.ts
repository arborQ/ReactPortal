export type FormFields<TModel> = {
  [P in keyof TModel]: Utils.Forms.IFormElement
};

export class FormService<TModel> implements Utils.Forms.IFormElement<TModel> {
  get isValueValid(): boolean {
    for (const item in this.items) {
      const itemRule = this.items[item];

      if (itemRule !== undefined && !itemRule.isValueValid) {
        return false;
      }
    }

    return true;
  }

  get isValueChanged(): boolean {
    for (const item in this.items) {
      const itemRule = this.items[item];

      if (itemRule !== undefined && itemRule.isValueChanged) {
        return true;
      }
    }

    return false;
  }

  get isValid(): boolean {
    return true;
  }

  items: FormFields<TModel>;

  constructor(
    public value: TModel,
    public onValueChange: Utils.Forms.ValueChangeAction<TModel>,
    public onValidationError: (errorMessages: string[]) => void
  ) {}

  registerFields(formFields: FormFields<TModel> | {}): void {
    for (const item in this.items) {
      const itemRule = this.items[item];

      if (itemRule !== undefined) {
        this.items[item] = {
          ...(itemRule as any),
          onValueChange: v => {
            // this.value[item] = v;
            itemRule.onValueChange(v);
            this.onValueChange(this.value);
          }
        };
      }
    }
  }
  changeAction(model: TModel): void | Promise<TModel> {
    console.log("i don't care");
  }
}
