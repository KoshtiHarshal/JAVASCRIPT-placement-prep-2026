//Difference between var, let and const

var a = 10;
console.log(a);
var a = 20; //var can be redeclared and updated
console.log(a);
let b = 10;
b = 20; //let can be updated but not redeclared
console.log(b);
const c = 30; //const can neither be updated nor redeclared
console.log(c);

//var is globally scoped while let and const are block scoped
//var can be updated and redeclared within its scope
//variable can be null but let and const cannot be
//const must be initialized during declaration unlike let and var
//var must not be used in latest BCE6 codding