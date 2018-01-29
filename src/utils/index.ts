import { setTimeout } from "timers";
import * as ajax from "./ajax";
import ApiComponent from "./apiComponent";
import Assign from "./assign";
import AsyncComponent from "./asyncComponent";
import Clone from "./clone";
import StateComponent from "./stateComponent";
import * as Validator from "./validators";

function debounce(func: () => void, wait: number): () => void {
    let timeout: NodeJS.Timer | null = null;

    return () => {
        if (!!timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(func, wait);
    };
}

export {
    ajax,
    Assign,
    ApiComponent,
    AsyncComponent,
    StateComponent,
    Clone,
    Validator,
    debounce as Debounce,
};
