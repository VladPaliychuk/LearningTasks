let id1 = Symbol("id");
let id2 = Symbol("id")

alert(id1 == id2); // false

let id = Symbol("id");
let user = {
    [id]: 123
};
let clone = Object.assign({}, user);
alert( clone[id] ); // 123