import "@testing-library/jest-dom"; 

jest.setTimeout(10000);
process.on('exit', () => {
    const timers = setTimeout(() => {}, 1000);
    timers.unref();
});

afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
    jest.clearAllTimers(); // Clear timers after each test
});
