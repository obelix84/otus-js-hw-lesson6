// 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
// Напишите программу, выводящую день недели по введённой дате.
function getCurrentDay() {
    let strDate = prompt("Input date");
    let arr = strDate.split(".").map((el) => +el);
    let date = new Date(arr[2], arr[1]-1, arr[0]);
    console.log(date.getDay());
}
// 2.Написать программу, которая выводит в консоль количество минут,
// прошедшее с начала сегодняшнего дня.

function getMinutesFromStartDay() {
    let date = new Date();
    date.setSeconds(0, 0);
    let morning = new Date();
    morning.setHours(0,0,0,0);
    return (date.getTime() - morning.getTime())/ 60000;
}

module.exports = {getCurrentDay, getMinutesFromStartDay}