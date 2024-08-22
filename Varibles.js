/* =========================================
Variables:
In JavaScript, variables are used to store and manage data. They are created using the var, let, or const keyword.

1) Var Keyword:
The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behavior.

var x = 10;

2)let Keyword:
The let keyword is a block-scoped variables. It’s commonly used for variables that may change their value.

let y = "Hello";

3) const Keyword:
The const keyword declares variables that cannot be reassigned. It’s block-scoped as well.

const PI = 3.14;

============================================*/

//var Keyword
var a = "Hello World"
var b = 10;
var c = 12;
var d = b + c;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//let Keyword
let a = "Hello learners"
let b = "joining";
let c = " 12";
let d = b + c;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//const Keyword
const a = "Hello learners"
console.log(a);

const b = 400;
console.log(b);

const c = "12";
console.log(c);
// Can not change a value for a constant
//  c = "new"
//  console.log(c) //will show error