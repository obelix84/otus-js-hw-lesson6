// *В переменных circle и square хранятся площади круга и квадрата
//  соответственно. Написать программу, которая определяет,
//  поместится ли круг в квадрат.
let circle = Math.PI * 2 * 5;
const square = 6 ** 2;
function task3(circle, square) {
    let diameter = (Math.sqrt(circle / Math.PI) * 2).toFixed(3);
    let squareLength = Math.sqrt(square).toFixed(3);
    if (diameter <= squareLength) {
        console.log("Contain");
    } else {
        console.log("Not contain");
    }
}

module.exports = {task3};