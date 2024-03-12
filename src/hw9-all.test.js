/**
 * @jest-environment jsdom
 */

const {isRightTriangle, squareOfCircle} = require("./hw9-all");

describe('homework 9 tests', () => {
    it('Task 1, right angle triangle ', () => {
        expect(isRightTriangle(3,4,5)).toBeTruthy();
        expect(isRightTriangle(8,15,18)).not.toBeTruthy();
    });

    it('Task 2, square of circle', () => {
        const logSpy = jest.spyOn(console, "log");
        jest.spyOn(window,'prompt').mockReturnValueOnce(5)
        squareOfCircle();
        expect(logSpy).toHaveBeenCalledWith("78.54 31.42");
    });
});