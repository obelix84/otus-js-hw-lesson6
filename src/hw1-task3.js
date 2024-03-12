// 3.*Написать программу, которая запрашивает у пользователя ввод
// трёхзначного числа, а потом выводит в консоль сумму цифр
// введённого числа
function sumNumbers() {
    let str = prompt("Input number");
    let summ = 0;
    if (str != null) {
        for (let i = 0; i < str.length; i++) {
            summ += +str.charAt(i);
        }
    }
    console.log(summ);
}

module.exports = {sumNumbers};