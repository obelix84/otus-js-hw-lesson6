/**
 * @jest-environment jsdom
 */

const {user, task1, task2} = require("./hw4-all");
describe('homework 4 tests', () => {
    it('Task 1 ', () => {
        jest.spyOn(window,'prompt').mockReturnValueOnce(29)
        expect(user).toHaveProperty("name", "John");
        task1(user);
        expect(user).toHaveProperty("age", 29);
    });

    it('Task 2 ', () => {
        let admin = task2(user);
        expect(admin).toMatchObject(Object.assign(user, {role: "admin"}));
    });
});