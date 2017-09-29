import { setTimeout } from "timers";
import * as ajax from "./ajax";
import Assign from "./assign";
import AsyncComponent from "./asyncComponent";
import Clone from "./clone";
import * as Validator from "./validators";

function debounce(func: () => void, wait: number): () => void {
    let timeout: NodeJS.Timer = null;

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
    AsyncComponent,
    Clone,
    Validator,
    debounce as Debounce,
};
