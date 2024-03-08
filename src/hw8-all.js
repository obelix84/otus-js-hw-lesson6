// 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
// Напишите программу, выводящую день недели по введённой дате.
function getCurrentDay() {
  const strDate = prompt('Input date');
  const arr = strDate.split('.').map((el) => +el);
  const date = new Date(arr[2], arr[1] - 1, arr[0]);
  console.log(date.getDay());
}
// 2.Написать программу, которая выводит в консоль количество минут,
// прошедшее с начала сегодняшнего дня.

function getMinutesFromStartDay() {
  const date = new Date();
  date.setSeconds(0, 0);
  const morning = new Date();
  morning.setHours(0, 0, 0, 0);
  return (date.getTime() - morning.getTime()) / 60000;
}

module.exports = { getCurrentDay, getMinutesFromStartDay };
