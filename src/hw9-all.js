// 1.Даны длины трёхсторон треугольника.
// Определить, является ли треугольник прямоугольным.

function isRightTriangle(a, b, c) {
    if (a>b && a>c)  return a*a === b**2 + c**2;
    if (b>a && b>c) return b*b === a**2 + c**2
    return c*c === a**2 + b**2;
}

// 2.Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и площадь круга с радиусом R
function squareOfCircle() {
    let r = +prompt("input radius");
    let sq = Math.PI * r * r;
    let l = 2 * Math.PI * r;
    console.log(sq.toFixed(2) + " " + l.toFixed(2));
}

module.exports = {isRightTriangle, squareOfCircle};