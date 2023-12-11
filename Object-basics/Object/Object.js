let user1 = new Object(); // синтаксис "конструктора об’єктів"
let user2 = {};  // синтаксис "літералу об’єкта"

let user = {     // об’єкт
    name: "Іван",  // за ключем "name" зберігаємо значення "Іван"
    age: 30        // за ключем "age" зберігати значення "30"
  };

// отримаємо значення властивостей об’єкта:
alert( user.name ); // Іван
alert( user.age ); // 30

user.isAdmin = true;
delete user.age;

let user = {
  name: "Іван",
  age: 30,
  "likes birds": true  // Ім’я властивості з декількох слів повинно бути в лапках
};

// присвоювання значення властивості
user["любить птахів"] = true;

// отримання значення властивості
alert(user["любить птахів"]); // true

// видалення властивості
delete user["любить птахів"];

let key = "любить птахів";
// так само, як user["любить птахів"] = true;
user[key] = true;

let user = {
  name: "Іван",
  age: 30
};
let key2 = prompt("Що ви хочете знати про користувача?", "name");

// доступ до властивості через змінну
alert( user[key2] ); // Іван (якщо ввести "name")


let fruit = prompt("Які фрукти купити?", "apple");

let bag = {
  [fruit]: 5, // назву властивості взято зі змінної fruit
};

alert( bag.apple ); // 5 якщо fruit="apple"

let _fruit = prompt("Які фрукти купити?", "apple");
let _bag = {};
// назву властивості взято зі змінної fruit
_bag[_fruit] = 5;

let $fruit = 'apple';
let $bag = {
  [$fruit + 'Computers']: 5 // bag.appleComputers = 5
};


function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...інші властивості
  };
}

let user = makeUser("Іван", 30);
alert(user.name); // Іван

function makeUser(name, age) {
  return {
    name, // те ж саме, що name: name
    age,  // те ж саме, що age: age
    // ...
  };
}

let obj = {
  0: "тест" // те ж саме, що "0": "тест"
};
// обидва попередження мають доступ до однієї властивості (число 0 перетворюється на рядок "0")
alert( obj["0"] ); // тест
alert( obj[0] ); // тест (таж сама властивість)


let user = {};
alert( user.noSuchProperty === undefined ); // true означає "такої властивості немає"

let user = { name: "Іван", age: 30 };

alert( "age" in user ); // true, user.age існує
alert( "blabla" in user ); // false, user.blabla не існує

let user = { age: 30 };
let _key = "age";
alert( _key in user ); // true, властивість "age" існує

let _obj = {
  test: undefined
};
alert( _obj.test ); // виведеться undefined, значить властивість не існує?
alert( "test" in _obj ); // true, властивість існує!


let user = {
  name: "Іван",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключі
  alert( key );  // name, age, isAdmin
  // значення ключів
  alert( user[key] ); // Іван, 30, true
}


let codes ={
  "49": "Німеччина",
  "41": "Швейцарія",
  "44": "Великобританія",
  // ..,
  "1": "США"
};

for (let code in codes) {
 alert(code); // 1, 41, 44, 49
}

let _codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in _codes) {
  alert( +code ); // 49, 41, 44, 1
}