export default function<T, K>(items: T[], func: (item: T) => K): K[] {
   return items.reduce((resultCollection, inputItem) => {
        return [
            ...resultCollection,
            func(inputItem),
        ];
    }, [] as K[]);
}
