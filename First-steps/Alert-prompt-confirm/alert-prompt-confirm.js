alert("Привіт");


let age = prompt('Скільки вам років?', 100);
alert(`Вам ${age} років!`); // Вам 100 років!
// title
// Текст, який буде відображатися для відвідувача.
// default
// Необов’язковий другий параметр, початкове значення для поля введення тексту.


let isBoss = confirm("Ви бос?");
alert( isBoss ); // true, якщо натиснута OK
// Функція confirm показує модальне вікно з питанням question та двома кнопками: ОК та Скасувати.
// Результат: true, якщо натиснути кнопку OK, інакше — false.
// Наприклад: