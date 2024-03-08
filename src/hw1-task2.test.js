const {
  sumLength, task2,
} = require('./hw1-task2');

describe('Test summary of length', () => {
  test('Summary of length "asdfewdsaf" and "12345678"', () => {
    expect(sumLength('asdfewdsaf', '12345678')).toBe(18);
  });

  test('Summary of length "12345" and "6789"', () => {
    expect(sumLength('12345', '6789')).toBe(9);
  });

  test('console.log the text summary of length', () => {
    const logSpy = jest.spyOn(console, 'log');
    task2('12345', '123');
    expect(logSpy).toHaveBeenCalledWith(8);
  });
});
