const { task1 } = require('./hw2-task1');

describe('Test max of two numbers', () => {
  test('console.log max of 10 and 20', () => {
    const logSpy = jest.spyOn(console, 'log');
    task1(10, 20);
    expect(logSpy).toHaveBeenCalledWith(20);
  });

  test('console.log max of 30 and 10', () => {
    const logSpy = jest.spyOn(console, 'log');
    task1(30, 10);
    expect(logSpy).toHaveBeenCalledWith(30);
  });
});
