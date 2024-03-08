/**
 * @jest-environment jsdom
 */

const { task1, task2, task3 } = require('./hw3-all');
const { sumNumbers } = require('./hw1-task3');

describe('homework 3 tests', () => {
  test('Test sum 1 to 50 console.log 3825, ', () => {
    const logSpy = jest.spyOn(console, 'log');
    task1();
    expect(logSpy).toHaveBeenCalledWith(3825);
    logSpy.mockRestore();
  });

  test('Testing multiplication table of number 7', () => {
    const logSpy = jest.spyOn(console, 'log');
    task2();
    expect(logSpy).toHaveBeenNthCalledWith(1, '7 x 1 = 7');
    expect(logSpy).toHaveBeenNthCalledWith(2, '7 x 2 = 14');
    expect(logSpy).toHaveBeenNthCalledWith(3, '7 x 3 = 21');
    expect(logSpy).toHaveBeenNthCalledWith(4, '7 x 4 = 28');
    expect(logSpy).toHaveBeenNthCalledWith(5, '7 x 5 = 35');
    expect(logSpy).toHaveBeenNthCalledWith(6, '7 x 6 = 42');
    expect(logSpy).toHaveBeenNthCalledWith(7, '7 x 7 = 49');
    expect(logSpy).toHaveBeenNthCalledWith(8, '7 x 8 = 56');
    expect(logSpy).toHaveBeenNthCalledWith(9, '7 x 9 = 63');
    logSpy.mockRestore();
  });

  test('Testing task3 with *', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('6').mockReturnValueOnce('10').mockReturnValueOnce('11');
    const logSpy = jest.spyOn(console, 'log');
    task3();
    expect(logSpy).toHaveBeenCalledWith(3);
    task3();
    expect(logSpy).toHaveBeenCalledWith(5);
    task3();
    expect(logSpy).toHaveBeenCalledWith(6);
  });
});
