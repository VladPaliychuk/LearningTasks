let year = prompt('В якому році була опублікована специфікація ECMAScript-2015?', '');

if (year == 2015) alert( 'Ви маєте рацію!' );
if (year == 2015) {
    alert( "Це правильно!" );
    alert( "Ви такий розумний!" );
}

let condition = (year == 2015); // рівність обчислюється як true або false
if (condition) {
  alert();
}

if (year == 2015) {
    alert( 'Ви здогадалися правильно!' );
  } else {
    alert( 'Як ви можете так помилятися?' ); // будь-яке значення, окрім 2015
}

if (year < 2015) {
  alert( 'Зарано...' );
} else if (year > 2015) {
  alert( 'Запізно' );
} else {
  alert( 'Саме так!' );
}

let result = умова ? значення1 : значення2;
//Спочатку обчислюється умова: якщо вона є правдивою, тоді повертається значення1, інакше – значення2.
let accessAllowed = (age > 18) ? true : false;

let company = prompt('Яка компанія створила JavaScript?', '');
(company == 'Netscape') ?
   alert('Правильно!') : alert('Неправильно.');


let age = prompt('Вік?', 18);
let message = (age < 3) ? 'Привіт, крихітко!' :
  (age < 18) ? 'Вітаю!' :
  (age < 100) ? 'Моє шанування!' :
  'Який незвичайний вік!';
  
alert( message );