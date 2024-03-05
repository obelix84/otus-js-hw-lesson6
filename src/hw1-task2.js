// 2.В двух переменных хранятся строки символов. Написать программу,
// которая выведет в консоль суммарное количество символов
// в обоих строках.

let strA = "asdfdsgerregfds";
let strB = "dfasdfasf";
function task2(strA, strB) {
    console.log(sumLength(strA, strB));
}
function sumLength(s1, s2) {
    return s1.length + s2.length;
}

module.exports = {sumLength, task2, strA, strB};