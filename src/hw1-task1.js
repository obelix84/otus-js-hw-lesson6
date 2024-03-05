// 1.Впеременных a и b хранятся числа. Написать программу,
// которая выводит в консоль произведение и сумму этих чисел.
let a = 10;
let b = 20;
function task1 (a, b) {
    console.log(sum(a, b) + " , " + mult(a, b));
}
function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

module.exports = { sum, mult, task1};