// first, declare
function sayHi() {
    alert("Привіт!");
}
// then add as a method
user.sayHi = sayHi;
user.sayHi(); // Привіт!


user = {
    sayHi() { 
      alert("Привіт!");
    }
};


let user = {
    name: "Іван",
    age: 30,
  
    sayHi() {
      // "this" -- це "поточний об’єкт"
      alert(this.name);
    }
  
};
user.sayHi(); // Іван


user = { name: "Іван" };
admin = { name: "Адмін" };

function sayHi() {
  alert( this.name );
}
// використовуємо одну і ту ж функцію у двох об’єктах
user.f = sayHi;
admin.f = sayHi;
// виклики функцій, приведені нижче, мають різні this
// "this" всередині функції є посиланням на об’єкт "перед крапкою"
user.f(); // Іван  (this == user)
admin.f(); // Адмін  (this == admin)