export class FormService<TModel> {
  getModel(): TModel {
    return {} as TModel;
  }

  get isValid(): boolean {
    return true;
  }
}

interface IFormControl<T> {
  onChange: (value: T) => void;
}
