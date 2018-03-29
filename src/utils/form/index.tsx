import { computed, decorate, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

export type FormComponent<TModel> = {
  [P in keyof TModel]: IControl<TModel[P]>;
};

export type FormComponentValidationResult<TModel> = {
  [P in keyof TModel]?: string[];
};

type stateChangeAction<T> = (model: T | null) => Promise<T> | undefined;

export type validator<T> = (model: T) => string | Promise<string>;

interface IControlDictionary<T extends IControl<any>> {
  [key: string]: T;
}

export interface IControl<T> {
  state: T | null;
  validators?: Array<validator<T>>;
}

export interface IControlResult<T> {
  state: T | null;
  validators: string[];
}

interface IRootControl<T> extends IControl<T> {
  childControls: IControlDictionary<any>;
  addControl<TInnerControl extends IControl<TInnerControl>>(name: string, control: TInnerControl): void;
}

class Control<TModel> implements IControl<TModel> {
  @observable state: TModel | null = null;
  @computed get validationErrors(): string[] {
    return [];
  }

  private subscribers: Array<stateChangeAction<TModel>> = [];
}

class RootControl<TModel>
  extends Control<TModel>
  implements IRootControl<TModel> {
  childControls: IControlDictionary<any> = {};
  addControl<TInnerControl extends IControl<TInnerControl>>(name: string, control: TInnerControl): void {
    this.childControls[name] = control;
  }
}

export class Form<TModel> extends RootControl<TModel> {

}

// function calculateModel<T>(model: FormComponent<T>): FormComponentResult<T> {
//   const resultModel: FormComponentResult<T> = {} as any;

//   Object.keys(model).forEach((key) => {
//     resultModel[key] = new FormComponentResult
//   });

//   return resultModel;
// }

interface IFormProps<TModel> {
  onSubmit: (data: TModel) => Promise<TModel> | void;
  render: (data: FormComponent<TModel>, validation?: FormComponentValidationResult<TModel>) => JSX.Element;
  model: FormComponent<TModel>;
}

export function RenderForm<TModel>(props: IFormProps<TModel>): JSX.Element {

  const FormView = observer((model: FormComponent<TModel>) => {
    return (
      <form onSubmit={($event) => { $event.preventDefault(); }}>
        <div>{props.render(model)}</div>
      </form>
    );
  });

  const observableModel = Object.assign({}, props.model);

  Object.keys(observableModel).forEach((key) => {
    observableModel[key] = decorate(observableModel[key], { state: observable });
  });

  return <FormView {...observableModel} />;
}
