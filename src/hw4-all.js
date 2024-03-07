// Создайте объект user, содержащий поле name со значением ‘John’.
// 1.Запросить у пользователя ввод числа. Записать введенное
// значение в поле age объекта user.
const user = { name: 'John' };

function task1(obj) {
  const inputAge = prompt('input Age:');
  obj.age = inputAge;
}

// 2.Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением ‘admin’.
function task2(obj) {
  return Object.assign(obj, { role: 'admin' });
}

module.exports = { user, task1, task2 };
