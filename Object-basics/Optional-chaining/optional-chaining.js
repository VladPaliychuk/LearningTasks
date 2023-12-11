alert( user.address && user.address.street && user.address.street.name );
alert( user?.address?.street ); // undefined (немає помилки)

let html = document.querySelector('.elem')?.innerHTML; // буде undefined, якщо немає елемента

// Наприклад, якщо за нашою логікою об’єкт user точно існує, але його властивість address є необов’язковою,
//  тоді нам слід використовувати конструкцію user.address?.street. 
//  Проте аж ніяк не user?.address?.street.

let user = null;
let x = 0;

user?.sayHi(x++); // немає "user", отже до x++ обчислення не дійде

alert(x); // 0, значення не було збільшено


let userAdmin = {
    admin() {
      alert("Я адміністратор");
    }
  };
let userGuest = {};
userAdmin.admin?.(); // Я адміністратор
userGuest.admin?.(); // нічого (немає такого методу)