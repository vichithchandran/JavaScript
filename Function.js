/* =========================================
Function:
  A function in JavaScript is a reusable block of code that performs a specific task.
  Functions can take inputs, process them, and return a result.

Syntax: 
function functionName(Parameter1, Parameter2, ...)
{
    // Function body
}

1) Function Declaration:
 It declares a function with a function keyword. The function declaration must have a function name.

Syntax:

function functionName(paramA, paramB) {
    // Set of statements
}

2) Function Expression:
  It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment. 

  Syntax:
  let Function_name= function(paramA, paramB) {
    // Set of statements
}

Arrow Function:
Arrow Function is one of the most used and efficient methods to create a function in JavaScript because of its comparatively easy implementation. It is a simplified as well as a more compact version of a regular or normal function expression or syntax.

Syntax:
let function_name = (argument1, argument2 ,..) => expression

Calling Functions:
After defining a function, the next step is to call them to make use of the function. We can call a function by using the function name separated by the value of parameters enclosed between the parenthesis and a semicolon at the end. 

Syntax:
functionName( Value1, Value2, ..);

Return Statement:
There are some situations when we want to return some values from a function after performing some operations. In such cases, we can make use of the return statement in JavaScript.

Syntax:
return value;

============================================*/
//Function Declaration
function calcAddition(number1, number2) { 
  return number1 + number2; 
}
console.log(calcAddition(6,9));

//Function Expression:
const square = function (number) {
  return number * number;
};
const x = square(4); 
console.log(x);

//Arrow Function:
const square2 = (number) => number * number; 
const y = square2(4); 
console.log(y);

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
    return s.length;
}); //Normal Function
console.log("Normal way ", a2); 

const a3 = a.map((s) => s.length); // Arrow Function
console.log("Using Arrow Function ", a3); 

// Calling a Function:
function welcomeMsg(name) {
  return ("Hello " + name + " welcome ");

}

// creating a variable
let nameVal = "Admin";

// calling the function
console.log(welcomeMsg(nameVal));

