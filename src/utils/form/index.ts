type stateChangeAction<T> = (model: T | null) => Promise<T> | undefined;

interface IControlDictionary<T extends IControl<any>> {
  [key: string]: T;
}

interface IControl<T> {
  state: T | null;
  changeState(model: T | null): void;
  subscribe(action: stateChangeAction<T>): void;
}

interface IRootControl<T> extends IControl<T> {
  childControls: IControlDictionary<any>;
  addControl<TInnerControl extends IControl<TInnerControl>>(name: string, control: TInnerControl): void;
}

class Control<TModel> implements IControl<TModel> {
  state: TModel | null = null;
  private subscribers: Array<stateChangeAction<TModel>> = [];
  changeState(model: TModel | null): void {
    this.state = model;

    this.subscribers.forEach((item) => item(this.state));
  }
  subscribe(action: (model: TModel) => Promise<TModel> | undefined): void {
    this.subscribers.push(action);
  }
}

class RootControl<TModel>
  extends Control<TModel>
  implements IRootControl<TModel> {
  childControls: IControlDictionary<any> = {};
  addControl<TInnerControl extends IControl<TInnerControl>>(name: string, control: TInnerControl): void {
    this.childControls[name] = control;
  }
}

export class Form<TModel> implements RootControl<TModel> {

}
