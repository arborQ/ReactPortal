import ValueMatchValidation from "./value.match";

export default class StringMatchValidation extends ValueMatchValidation<string> {
    constructor(resolver: () => string) {
        const defaultStringEqual = (a: string, b: string): boolean => {
            if (!a || !b) {
                return true;
            }
            return a.trim() === b.trim();
        };

        super(resolver, defaultStringEqual);
    }
}
