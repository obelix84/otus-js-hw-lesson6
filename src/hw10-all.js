// Пользователь вводит текстовуюстроку.
// Определить с помощьюрегулярного выражения, является ли введённая строка:
// 1.Датой.
function isDate(str) {
  return str.match(/^(3[01]|[12][0-9]|0?[1-9])(\/|\.)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/);
}

// 2.Адресом электронной почты.
function isEmail(str) {
  return str.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
}

module.exports = { isDate, isEmail };
