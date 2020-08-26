export interface ITimeoutPromise extends Promise<any> {
    clear(): void;
    reject(): void;
    resolve(): void;
}

export interface ITimeoutPromiseScope {
    timeout?: any;
    resolve?: Function;
    reject?: Function;
}

/**
 * Returns a promise that is resolved after timeout. Promise can be cleared, resolved and rejected on demand.
 * @param milliseconds
 */
export const timeout = (milliseconds = 0): ITimeoutPromise => {
    const scope: ITimeoutPromiseScope = {};

    const promise = new Promise((resolve, reject) => {
        scope.resolve = resolve;
        scope.reject = reject;

        scope.timeout = setTimeout(() => {
            resolve();
        }, milliseconds);
    }) as ITimeoutPromise;

    promise.clear = () => {
        clearTimeout(scope.timeout);
    };

    promise.reject = () => {
        clearTimeout(scope.timeout);
        scope.reject();
    };

    promise.resolve = () => {
        clearTimeout(scope.timeout);
        scope.resolve();
    };

    return promise;
};
