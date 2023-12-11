// Напишіть код, виконавши завдання з кожного пункту окремим рядком:

// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Іван.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Видаліть властивість name з об’єкта.

let user = {};

user.name = "Ivan";

user.surname = "Smith";

user.name = "Petro";

delete user.name;


// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.
function isEmpty(obj){
    for (let key in obj) {
        return false;
      }
    return true;
}


// У нас є об’єкт для зберігання заробітної плати нашої команди:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.
// Якщо об’єкт salaries порожній, то результат має бути 0.

function getSalary(obj){
    let sum = 0;

    for(let key in obj){
        sum += obj[key];
    }
    return sum;
}

//Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key] === 'number')){
            obj[key] *= 2;
        }
    }
}