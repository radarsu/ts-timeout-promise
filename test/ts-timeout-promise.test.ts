// import DummyClass from '../src/ts-timeout-promise'

import {
    timeout,
} from '../src/ts-timeout-promise';

/**
 * Dummy test
 */
describe('Dummy test', () => {
    it('should be truthy', () => {
        expect(true).toBeTruthy();
    });

    it('should return promise', () => {
        expect(timeout()).toBeInstanceOf(Promise);
    });

    it('should activate after 1s', async () => {
        const timer = await timeout(1000);
    });

    it('should clear timeout', async () => {
        // clear timeout
        const timeValue = 100;
        const timer = timeout(timeValue);
        let triggered = false;

        timer.then(() => {
            triggered = true;
        });

        timer.clear();

        await timeout(timeValue);
        expect(triggered).toBeFalsy();
    });
});

// declarations
import {
    jest,
} from 'jest';

declare const beforeAll: jest.Lifecycle;
declare const beforeEach: jest.Lifecycle;
declare const afterAll: jest.Lifecycle;
declare const afterEach: jest.Lifecycle;
declare const describe: jest.Describe;
declare const fdescribe: jest.Describe;
declare const xdescribe: jest.Describe;
declare const it: jest.It;
declare const fit: jest.It;
declare const xit: jest.It;
declare const test: jest.It;
declare const xtest: jest.It;
declare const expect: jest.Expect;
