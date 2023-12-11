//Чи можливо створити функції A та B, щоб new A() == new B()?
let obj = {}
function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

alert( a == b ); // true


// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:

// read() запитує два значення за допомогою prompt і записує їх у властивості об’єкта з іменами a та b.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.
// Наприклад:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    },
    this.sum = function() {
        return this.a + this.b;
    },
    this.mul = function() {
        return this.a * this.b;
    }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


function Accumulator(num) {
    this.value = num;
    
    this.read = function() {
        this.value += +prompt('Number: ', 0);
    }
}
let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає введене користувачем значення

alert(accumulator.value); // показує суму цих значень