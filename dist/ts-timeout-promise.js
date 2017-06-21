"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
exports.timeout = (interval = 0) => {
    let timer;
    const promise = _.extend(new Promise((resolve) => {
        timer = setTimeout(() => resolve(timer), interval);
    }), {
        clear: () => {
            clearTimeout(timer);
        },
    });
    return promise;
};
//# sourceMappingURL=ts-timeout-promise.js.map