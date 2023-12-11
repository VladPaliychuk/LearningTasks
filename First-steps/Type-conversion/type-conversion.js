let value = true;
alert(typeof value); // boolean

value = String(value); // тепер value - це рядок "true"
alert(typeof value); // string


alert( "6" / "2" ); // 3, рядки перетворюються на числа


let str = "123";
alert(typeof str); // string

let num = Number(str); // стає числом 123

alert(typeof num); // number


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (помилка читання числа на місці символу "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("вітаю") ); // true
alert( Boolean("") ); // false
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // пробіли, також true (будь-які непусті рядки є true)