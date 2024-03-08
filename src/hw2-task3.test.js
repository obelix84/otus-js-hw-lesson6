const { task3 } = require('./hw2-task3');

describe('Test circle in square', () => {
  test('console.log cir = Math.PI * 3 * 3 sq = 7**2, ', () => {
    const logSpy = jest.spyOn(console, 'log');
    task3(Math.PI * 3 * 3, 7 ** 2);
    expect(logSpy).toHaveBeenCalledWith('Contain');
  });

  test('console.log cir = Math.PI * 4 * 4 sq = 2**2, ', () => {
    const logSpy = jest.spyOn(console, 'log');
    task3(Math.PI * 4 * 4, 2 ** 2);
    expect(logSpy).toHaveBeenCalledWith('Not contain');
  });
});
