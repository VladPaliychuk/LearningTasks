let user;
alert(user ?? "Анонімний"); // Анонімний (user є undefined)

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";
// показує перше визначене значення:
alert(firstName ?? lastName ?? nickName ?? "Анонімний"); // Суперкодер

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0