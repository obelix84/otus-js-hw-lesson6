/**
 * @jest-environment jsdom
 */

const {user, task1, admin, task2} = require("./hw4-all");
describe('homework 4 tests', () => {
    it('Task 1 ', () => {
        jest.spyOn(window,'prompt').mockReturnValueOnce(29)
        expect(user).toHaveProperty("name", "John");
        task1(user);
        expect(user).toHaveProperty("age", 29);
    });

    it('Task 2 ', () => {
        task2();
        expect(Object.assign(user, { role: 'admin'})).toMatchObject(admin);
    });
});