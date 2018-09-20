type changeFunctionType<TModel> = (model: TModel, validationResult: string[])
  => Promise<TModel> | PromiseLike<TModel> | TModel;

export default class FormElement<TModel> {
  model: TModel;

  onChange?: changeFunctionType<TModel>;

  constructor(model: TModel, onChange: changeFunctionType<TModel>) {
    this.updateModel.bind(this);

    this.model = model;
    this.onChange = onChange;
  }

  updateModel(model: TModel): Promise<TModel> {
    if (this.onChange !== undefined) {
      return Promise.resolve(this.onChange(model, []));
    }

    return Promise.resolve(model);
  }
}

export function createFormElement<TModel>(model: TModel, onChange: changeFunctionType<TModel>): FormElement<TModel> {
  return new FormElement<TModel>(model, onChange);
}
