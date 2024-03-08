// 1.Даны длины трёхсторон треугольника.
// Определить, является ли треугольник прямоугольным.

function isRightTriangle(a, b, c) {
  const arr = [];
  arr.push(a, b, c);
  arr.sort((a1, b1) => b1 - a1);
  return arr[0] * arr[0] === arr[1] ** 2 + arr[2] ** 2;
}

// 2.Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и площадь круга с радиусом R
function squareOfCircle() {
  const r = +prompt('input radius');
  const sq = Math.PI * r * r;
  const l = 2 * Math.PI * r;
  console.log(`${sq.toFixed(2)} ${l.toFixed(2)}`);
}

module.exports = { isRightTriangle, squareOfCircle };
