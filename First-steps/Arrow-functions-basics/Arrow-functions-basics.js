let func = (arg1, arg2, rgN) => expression;
// Цей код створить функцію func з аргументами arg1..argN, що обчислює expression з правого боку (використовуючи ці аргументи) 
// та повертає його результат.
// Іншими словами, це приблизно те ж саме, що і:
let _func = function(arg1, arg2, argN) {
    return expression;
  };

let sum = (a, b) => a + b;

let double = n => n * 2;
// те ж саме, що і: let double = function(n) { return n * 2 }
alert( double(3) ); // 6

let sayHi = () => alert("Привіт!");
sayHi();


let age = prompt("Скільки вам років?", 18);

let welcome = (age < 18) ?
  () => alert('Привіт') :
  () => alert("Вітання!");

welcome();

// Багаторядкові стрілкові функції
let _sum = (a, b) => {  // фігурна дужка починає блок багаторядкової функції
    let result = a + b;
    return result; // якщо ми використовуємо фігурні дужки, то щоб повернути результат, потрібно додати "return"
  };
  