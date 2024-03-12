const {task0, task1, task2,task3} = require("./hw5-all");

describe('homework 5 tests', () => {
    it('Task 1, summarize of array elements ', () => {
        const logSpy = jest.spyOn(console, "log");
        task1([1,2,1,3,1,4,1,5,1,6]);
        expect(logSpy).toHaveBeenCalledWith(25);
    });

    it('Task 2, array multiple 2 ', () => {
        expect(task2([1,2,3])).toEqual([2, 4, 6]);
        expect(task2([1,2,3])).not.toEqual([2, 4]);
    });

    it('Task 3, console log max min ', () => {
        const logSpy = jest.spyOn(console, "log");
        task3([3,2,1]);
        expect(logSpy).toHaveBeenCalledWith("3 1");
    });
});