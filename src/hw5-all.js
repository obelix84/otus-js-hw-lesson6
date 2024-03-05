

// Создайте массив целыхчисел из 10 элементов.
function task0() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 10 + 1));
    }
    return numbers;
}

// 1.Выведите в консоль сумму всех элементов массива.
function task1(numbers){
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

// 2.Создайте новыймассив на основе исходного, в котором каждый
// элемент будет вдвое больше элемента исходного массива с таким же
// индексом. (a[1] = 3, b[1] = 6, где a—исходный массив, b—новый массив).
function task2(a) {
    return a.map((el) => {
        return el * 2;
    });
}

// 3.*Найдите и выведите в консоль наибольшийи наименьший
// элементы исходного массива
function task3(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    console.log(max + " " + min);
}

module.exports = {task0, task1, task2, task3};