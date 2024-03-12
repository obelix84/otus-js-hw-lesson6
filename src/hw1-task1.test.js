let { sum, mult,task1} = require('./hw1-task1');

describe('Test sum', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 2 + 3 to equal 3', () => {
        expect(sum(2, 3)).toBe(5);
    });
    test('adds 100 + 200 to equal 300', () => {
        expect(sum(100, 200)).toBe(300);
    });

    test('console.log the text sum', () => {
        const logSpy = jest.spyOn(console, 'log');
        task1(10, 20);
        expect(logSpy).toHaveBeenCalledWith("30 , 200");
    });

});

describe('Test multiple', () => {
    test('multiple 1 and 2 to equal 2', () => {
        expect(mult(1, 2)).toBe(2);
    });

    test('multiple 2 and 3 to equal 6', () => {
        expect(mult(2, 3)).toBe(6);
    });

    test('multiple 10 and 200 to equal 2000', () => {
        expect(mult(10, 200)).toBe(2000);
    });

    test('console.log the text mult', () => {
        const logSpy = jest.spyOn(console, 'log');
        console.log(mult(10,3));
        expect(logSpy).toHaveBeenCalledWith(30);
    });
});
