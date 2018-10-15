export { setTimeout } from "timers";
import { get, post, remove } from "./ajax";
export { default as ApiComponent } from "./apiComponent";
export { default as Assign } from "./assign";
export { default as AsyncComponent } from "./asyncComponent";
export { default as AuthorizedComponent } from "./components/authorized";
export { default as Clone } from "./clone";
export { default as SelectMany } from "./selectMany";
export { default as StateComponent } from "./stateComponent";
import * as validators from "./validators";
export { FormService } from "./form";
export { default as InputFormElement } from "./form/inputFormElement";

export function Debounce(func: () => void, wait: number): () => void {
  let timeout: any | null = null;

  return () => {
    if (!!timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(func, wait);
  };
}

export const ajax = {
  get,
  post,
  remove
};

export const Validator = validators;
