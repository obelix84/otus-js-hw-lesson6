/**
 * @jest-environment jsdom
 */

const { task2 } = require('./hw2-task2');

describe('Test get month function', () => {
  test('console.log 1, 6 and 13 month', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('1').mockReturnValueOnce('6').mockReturnValueOnce('13');
    const logSpy = jest.spyOn(console, 'log');
    task2();
    expect(logSpy).toHaveBeenCalledWith('January');
    task2();
    expect(logSpy).toHaveBeenCalledWith('June');
    task2();
    expect(logSpy).toHaveBeenCalledWith('Wrong number!');
  });
});
