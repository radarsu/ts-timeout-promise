import * as _ from 'lodash';

export const timeout = (interval = 0) => {
    let timer: any;

    const promise = _.extend(
        new Promise((resolve) => {
            timer = setTimeout(() => resolve(timer), interval);
        }), {
            clear: () => {
                clearTimeout(timer);
            },
        },
    );

    return promise;
};
