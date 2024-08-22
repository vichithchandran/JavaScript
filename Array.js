/* =========================================
Array:
An array in JavaScript is a data structure used to store multiple values in a single variable.
It can hold various data types and allows for dynamic resizing. 
Elements are accessed by their index, starting from 0.

Declaration of an Array:
There are basically two ways to declare an array i.e. Array Literal and Array Constructor

1) Array Literal:
Creating an array using array literal involves using square brackets [] to define and initialize the array. 

Syntax:
let arrayName = [value1, value2, ...];

2)Array Constructor:
The “Array Constructor” refers to a method of creating arrays by invoking the Array constructor function. This approach allows for dynamic initialization and can be used to create arrays with a specified length or elements.

Syntax:
let arrayName = new Array();

============================================*/

//Array Literal:
// Creating an Empty Array
let names = [];
console.log(names);
// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React"];
console.log(courses);

//Array Constructor:
let courses1 = new Array("HTML", "CSS", "Javascript", "React");
console.log(courses1);


