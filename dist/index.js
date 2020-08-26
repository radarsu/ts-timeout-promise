"use strict";
exports.__esModule = true;
exports.timeout = void 0;
/**
 * Returns a promise that is resolved after timeout. Promise can be cleared, resolved and rejected on demand.
 * @param milliseconds
 */
exports.timeout = function (milliseconds) {
    if (milliseconds === void 0) { milliseconds = 0; }
    var scope = {};
    var promise = new Promise(function (resolve, reject) {
        scope.resolve = resolve;
        scope.reject = reject;
        scope.timeout = setTimeout(function () {
            resolve();
        }, milliseconds);
    });
    promise.clear = function () {
        clearTimeout(scope.timeout);
    };
    promise.reject = function () {
        clearTimeout(scope.timeout);
        scope.reject();
    };
    promise.resolve = function () {
        clearTimeout(scope.timeout);
        scope.resolve();
    };
    return promise;
};
