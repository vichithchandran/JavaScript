/* =========================================
Scope:
In JavaScript, variables can have different scopes, determining their visibility and lifespan within the code. The main types of scopes are global scope, function scope, and block scope. 

  1) Global Scope:

  Definition: A variable is in the global scope if it is declared outside of any function or block.
  Visibility: It is accessible from anywhere in the code, including inside functions and blocks.
  Declaration: Variables declared with var, let, or const outside of functions or blocks are globally scoped.

  2) Function Scope:

  Definition: A variable is in the function scope if it is declared within a function.
  Visibility: It is only accessible within that function, including any nested functions.
  Declaration: Variables declared with var, let, or const inside a function are function-scoped.

  3)Block Scope:

  Definition: A variable is in the block scope if it is declared within a block, typically created using curly braces {}. Blocks include loops, conditionals, and any other code surrounded by curly braces.
  Visibility: It is only accessible within that block.
  Declaration: Variables declared with let or const inside a block are block-scoped.
============================================*/

//Global Scope:
var globalVar = "I'm global"; // Global scope
function myFunction() {
    console.log(globalVar); // Accessible inside function
}
myFunction(); // Output: "I'm global"
console.log(globalVar); // Accessible here too


//Function scope:
function my_Function() {
  var functionVar = "I'm in a function"; // Function scope
  console.log(functionVar); // Accessible inside the function
}
my_Function(); // Output: "I'm in a function"
// console.log(functionVar); // Error: functionVar is not defined


//Block Scope:
if (true) {
  let blockVar = "I'm in a block"; // Block scope
  console.log(blockVar); // Accessible inside the block
}

// console.log(blockVar); // Error: blockVar is not defined