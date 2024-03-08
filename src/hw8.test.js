/**
 * @jest-environment jsdom
 */

const { getCurrentDay, getMinutesFromStartDay } = require('./hw8-all');

describe('homework 8 tests', () => {
  it('Task 1, get day ', () => {
    const logSpy = jest.spyOn(console, 'log');
    jest.spyOn(window, 'prompt').mockReturnValueOnce('05.03.2024');
    getCurrentDay();
    expect(logSpy).toHaveBeenCalledWith(2);
  });

  it('Task 2, get minutes from start day ', () => {
    const mockDate1 = new Date('1995-12-17T01:24:00');
    const mockDate2 = new Date('1995-12-17T01:24:00');
    global.Date = jest.fn().mockImplementationOnce(() => mockDate1)
      .mockImplementationOnce(() => mockDate2); // mock Date "new" constructor
    global.Date.now = jest.fn().mockReturnValueOnce(mockDate1.valueOf())
      .mockReturnValueOnce(mockDate2.valueOf());// mock Date.now
    expect(getMinutesFromStartDay()).toBe(84);
  });
});
