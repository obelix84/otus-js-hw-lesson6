// 1.Впеременных a и b хранятся числа. Написать программу,
// которая выводит в консоль произведение и сумму этих чисел.
function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}
function task1(a, b) {
  console.log(`${sum(a, b)} , ${mult(a, b)}`);
}

module.exports = { sum, mult, task1 };
