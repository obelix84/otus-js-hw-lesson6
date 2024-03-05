// 1.Вывести в консоль сумму всех целых чисел от 50 до 100.
function task1() {
    let sum = 0;
    for (let i = 50; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

// 2.Вывести в консоль таблицу умножения на 7. 7 x 1 = 7 7 x 2 = 14 …
// 7 x 9 = 63
function task2() {
    for (let i = 1; i <= 9; i++) {
        console.log("7 x " + i + " = " + i * 7);
    }
}

    // *Запросить у пользователя ввод числа N. Вывести в консоль
    // среднее арифметическое всех нечётных чисел от 1 до N
function task3() {
    let number = +prompt("Input Number:");
    let counter = 0;
    let med = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 1) {
            med += i;
            counter++;
        }
    }
    console.log(med / counter);
}

module.exports = { task1, task2, task3}
