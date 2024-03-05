// 1.Даны длины трёхсторон треугольника.
// Определить, является ли треугольник прямоугольным.

function isRightTriangle(a, b, c) {
    let arr = [];
    arr.push(a, b, c);
    arr.sort((a, b) => b - a);
    return arr[0]*arr[0] === arr[1]**2 + arr[2]**2;
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