export default function Clone<T>(obj: T): T {
    if (null == obj || "object" !== typeof obj || obj instanceof Date) {
        return obj;
    }

    const copy = obj.constructor();

    for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = Clone(obj[attr]);
        }
    }

    return copy;
}
