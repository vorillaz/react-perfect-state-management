import '@testing-library/jest-dom';

afterEach(() => jest.restoreAllMocks());
afterEach(() => jest.clearAllMocks());
afterEach(() => jest.clearAllTimers());

jest.setTimeout(30000);
jest.retryTimes(3);
