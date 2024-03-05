/**
 * @jest-environment jsdom
 */

const {sumNumbers} = require("./hw1-task3");
describe('Test summary of numbers in string', () => {

    test('Summary of \"123\"', () => {
        jest.spyOn(window,'prompt').mockReturnValueOnce("123");
        const logSpy = jest.spyOn(console, "log");
        sumNumbers();
        expect(logSpy).toHaveBeenCalledWith(6);
    });

    test('Summary of \"1136\"', () => {
        jest.spyOn(window,'prompt').mockReturnValueOnce("1136");
        const logSpy = jest.spyOn(console, "log");
        sumNumbers();
        expect(logSpy).toHaveBeenCalledWith(11);
    });


});