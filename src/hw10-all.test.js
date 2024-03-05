const {isDate, isEmail} = require('./hw10-all.js');

describe('homework 10 tests', () => {
    it('Task 1, is valid date ', () => {
        expect(isDate("10.12.2024")).toBeTruthy();
        expect(isDate("10.15.2024")).not.toBeTruthy();
    });

    it('Task 2, is valid email', () => {
        expect(isEmail("val@mail.ru")).toBeTruthy();
        expect(isDate("val@mail")).not.toBeTruthy();
    });
});