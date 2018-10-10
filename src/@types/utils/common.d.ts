declare namespace Utils.Common {
  export type IRemapModel<TModel, TValue> = { [P in keyof TModel]?: TValue };
}
