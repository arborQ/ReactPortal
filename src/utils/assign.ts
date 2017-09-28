import Clone from "./clone";

export default function Assign<T>(source: T, options: any, ...extraOptions: any[]): T {
    return Object.assign(Clone(source), options, extraOptions) as T;
}
