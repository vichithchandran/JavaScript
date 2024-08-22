/* =========================================
A closure in JavaScript is a fundamental concept where a function "remembers" the environment (or scope or lexical environment) in which it was created, even after that environment has exited. This allows the function to access variables from its outer scope, even after the outer function has finished executing.

How Closures Work:

1)Function Creation:
When a function is created in JavaScript, it captures and "remembers" the variables from its surrounding scope.

Inner Function:
If a function is defined inside another function (an "outer" function), the inner function forms a closure. It has access to the outer function’s variables, as well as to any variables in the global scope.

Persistent Access:
Even after the outer function has returned and its execution context is removed from the call stack, the inner function retains access to the variables of the outer function.

Lexical Scoping:
Lexical Scoping is the rule that determines how variable names are resolved in nested functions. It refers to the way JavaScript determines the scope of variables based on the physical structure of the code at the time of writing (i.e., the lexical context).
When a function is defined, it "captures" the scope in which it was created. This includes all the variables that are in scope at that point.
Variables defined in an outer function are accessible within inner functions due to lexical scoping.
============================================*/

//Closure:
function outerFunction() {
  let outerVariable = 'I am outside!';
  
  function innerFunction() {
      console.log(outerVariable); // The inner function has access to outerVariable(Lexical Scoping)
  }
  
  return innerFunction;
}

const myClosure = outerFunction(); // outerFunction() returns innerFunction
myClosure(); // Output: 'I am outside!'

