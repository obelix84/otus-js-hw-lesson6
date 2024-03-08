const { diff, isWord, pow } = require('./hw6-all');

describe('homework 6 tests', () => {
  it('Task 1, diff two numbers 2 3', () => {
    expect(diff(2, 3)).toBe(1);
  });

  it('Task 1, diff two numbers 10 15', () => {
    expect(diff(15, 10)).toBe(5);
  });

  it('Task 2, one word test "OneWord" ', () => {
    expect(isWord('OneWord')).toBeTruthy();
  });

  it('Task 2, one word test "Two Words" ', () => {
    expect(isWord('Two Words')).not.toBeTruthy();
  });

  it('Task 3, POW function of 2^2 ', () => {
    expect(pow(2, 2)).toBe(4);
  });

  it('Task 3, POW function of 4^5 ', () => {
    expect(pow(4, 5)).toBe(1024);
  });
});
