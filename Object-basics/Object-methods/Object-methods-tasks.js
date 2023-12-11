function makeUser() {
    return {
      name: "Іван",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Який результат?
// Error: Cannot read property 'name' of undefined


//Створіть об’єкт calculator з трьома методами:

//read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
//sum() повертає суму збережених значень.
//mul() множить збережені значення і повертає результат.
let calculator = {
    a: null,
    b: null,
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Існує об’єкт ladder, що дозволяє підійматися вгору-вниз:
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // показує поточний крок
//       alert( this.step );
//     }
//   };
// Тепер, якщо нам потрібно зробити кілька викликів послідовно, можна зробити це так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Змініть код up, down і showStep так, щоб зробити доступним ланцюг викликів, наприклад:
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показує поточний крок
      alert( this.step );
    }
  };