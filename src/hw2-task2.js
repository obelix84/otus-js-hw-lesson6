// 2.Запросить у пользователя ввод числа от 1 до 12. Вывести в
// консоль название месяца, соответствующее этому
// числу (1 —январь, 2 —февраль и т.д.).
function task2() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const number = prompt('Input month (1-12):');
  if (number <= 12 && number >= 1) {
    console.log(months[number - 1]);
  } else {
    console.log('Wrong number!');
  }
}

module.exports = { task2 };
