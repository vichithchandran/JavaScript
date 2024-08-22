/* =========================================
Datatypes:
JavaScript data types are broadly categorized into primitive and non-primitive types.
The primitive data types include Number, String, Boolean, Null, Undefined, and Symbol.
Non-primitive types include Object, Array, and Function.

a) Primitive Data Types:
The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.

    1) Number: JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754.
    2) String:	JavaScript Strings are made up of a list of characters, essentially an array of characters.
    3) Boolean:	Represents a logical entity and can have two values: true or false.
    4) Null:	This type has only one value: null.
    5) Undefined:	A variable that has not been assigned a value is undefined.
    6) Symbol:	Symbols return unique identifiers that can be used as property keys in objects without colliding with other keys.
    7) BigInt:	BigInt is a built-in object providing a way to represent whole numbers larger than 253-1.

b) Non-Primitive Data Types: 
The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.

    1) Object: It is the most important data type and forms the building blocks for modern JavaScript. 
============================================*/

//Number:
let num = 2; // Integer 
let num2 = 1.3; // Floating point number
let num3 = Infinity; // Infinity
let num4 = 10/2; // NaN

console.log(num);
console.log(num2);
console.log(num3);
console.log(num4);

//String:
let str = "Hello There";
let str2 = 'Single quotes works fine';
let phrase = `can embed ${str}`;

console.log(str);
console.log(str2);
console.log(phrase);

//Boolean:
let isCoding = true; // yes
let isOld = false;     //no

console.log(isCoding);
console.log(isOld);

//Null
let age = null;
console.log(age);

//Undefined
let x;
console.log(x);  // undefined

//Symbol
let symbol1 = Symbol("Hello")
let symbol2 = Symbol("Hello")
  
// Each time Symbol() method is used to create new global Symbol
console.log(symbol1 == symbol2); // False

//BigInt
let bigBin = BigInt("0b1010101001010101001111111111111111");
// 11430854655n
console.log(bigBin);

//Object
//Using the “object constructor” syntax:

 let person = new Object(); 

//Using the “object literal” syntax:

let person1 = {};


