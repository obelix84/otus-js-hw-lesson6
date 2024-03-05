// 1.Напишите функцию diff, которая получает в качестве параметров 2
// числа и возвращает разницу между наибольшим и наименьшим.
function diff(a, b) {
    return Math.abs(a - b);
}

// 2.Напишите функцию isWord, которая принимает на вход текстовую строку.
// Функция возвращает true, если строка состоит из одного слова и false,
// если из нескольких.
function isWord(str) {
    if (typeof str == "string" && str.indexOf(" ") === -1) {
        return true;
    }
    return false;
}

// *Напишите функцию pow(a, x), которая вернёт значение числа a,
// возведённого в степень x.
function pow(a, x) {
    return a ** x;
}

module.exports = {diff, isWord, pow};