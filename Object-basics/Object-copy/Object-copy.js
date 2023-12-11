let user = {
    name: "Микола",
    age: 30
  };
  
  let clone = {}; // новий порожній об'єкт
  
  // давайте скопіюємо в нього всі властивості з user
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // тепер clone є повністю незалежним об'єктом з тим самим вмістом 
  clone.name = "Петро"; // змінив дані в ньому
  
  alert( user.name ); // значення "Микола" все ще в оригінальному об'єкті


Object.assign(dest, ...sources)
//Перший аргумент dest є цільовим об’єктом.
//Подальші аргументи – це список вихідних об’єктів.

let _user = { name: "Микола", age: 30 };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копіює всі властивості з permissions1 та permissions2 в user
Object.assign(_user, permissions1, permissions2);

// Тепер user = { name: "Микола", canView: true, canEdit: true }
alert(_user.name); // Микола
alert(_user.canView); // true
alert(_user.canEdit); // true

let clone = Object.assign({}, user);
  
alert(clone.name); // Микола
alert(clone.age); // 30

let $user = {
    name: "Микола",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
let clone = Object.assign({}, $user);
  
alert( $user.sizes === clone.sizes ); // true, той же об'єкт
  
// user та clone поділяють sizes
$user.sizes.width = 60;    // змінюємо властивість в одному місці
alert(clone.sizes.width); // 60, отримуємо результат в іншому


let clone = structuredClone(user);
alert( user.sizes === clone.sizes ); // false, різні об'єкти
  
// user та clone тепер абсолютно не пов'язані між собою
user.sizes.width = 60;    // тепер змінюємо властивість в одному місці
alert(clone.sizes.width); // 50, інше місце не пов'язане з попереднім