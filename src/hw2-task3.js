// *В переменных circle и square хранятся площади круга и квадрата
//  соответственно. Написать программу, которая определяет,
//  поместится ли круг в квадрат.
function task3(circle, square) {
  const diameter = (Math.sqrt(circle / Math.PI) * 2).toFixed(3);
  const squareLength = Math.sqrt(square).toFixed(3);
  if (diameter <= squareLength) {
    console.log('Contain');
  } else {
    console.log('Not contain');
  }
}

module.exports = { task3 };
