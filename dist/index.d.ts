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
export declare const timeout: (milliseconds?: number) => ITimeoutPromise;
