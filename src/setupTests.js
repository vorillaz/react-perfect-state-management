// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

afterEach(() => jest.restoreAllMocks());
afterEach(() => jest.clearAllMocks());
afterEach(() => jest.clearAllTimers());

jest.setTimeout(30000);
jest.retryTimes(3);
