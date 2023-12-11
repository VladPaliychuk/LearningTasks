function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
let user = new User("Джек");
alert(user.name); // Джек
alert(user.isAdmin); // false


function BigUser() {
   this.name = "Джон";
   return { name: "Ґодзілла" };  // <-- повертає цей об’єкт
}
alert( new BigUser().name );  // Ґодзілла, отримали цей об’єкт


function SmallUser() {
    this.name = "Джон";
    return; // <-- повертає this
  }
  alert( new SmallUser().name );  // Джон


function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Моє ім’я: " + this.name );
  };
}
let john = new User("Джон");
john.sayHi(); // Моє ім’я: Джон