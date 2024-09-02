/* =========================================
Error handling in JavaScript is essential for making your code robust, maintainable, and user-friendly. It allows you to manage unexpected situations gracefully rather than letting your application crash. Here’s a comprehensive guide to error handling in JavaScript.

1. Types of Errors
JavaScript has several types of errors, including:

SyntaxError: Errors in the syntax, e.g., missing parentheses or brackets.
ReferenceError: When a non-existent variable is accessed.
TypeError: When a value is not of the expected type.
RangeError: When a value is not in the set or range of allowed values.
URIError: When there is an error in encodeURI() or decodeURI().

2. The try...catch Statement
The try...catch statement allows you to handle exceptions (runtime errors) that occur in a block of code.

Basic Syntax:

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
}


3. The finally Block
The finally block contains code that will always execute, regardless of whether an error was thrown or not. It is typically used for cleanup actions, such as closing files or releasing resources.

Syntax:

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will run regardless of an error
}

The finally block will always execute, even if the try block does not throw an error.

4. Throwing Errors
You can use the throw statement to create custom errors when certain conditions are met in your code.

Syntax:
throw new Error("Something went wrong!");


5. Custom Error Classes
You can create custom error classes by extending the built-in Error class. This is useful when you need more specific error types.


6. Asynchronous Error Handling
Handling errors in asynchronous code, such as with Promises or async/await, requires special attention.

Handling Errors with Promises:

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There has been a problem with your fetch operation:', error));

The catch method handles any errors that occur during the asynchronous operations.

Handling Errors with async/await:

async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

fetchData();

The try...catch block is used to handle errors in an async function.
============================================*/

try {
  console.log("Start of try runs");
  unicycle;
  console.log("End of try runs -- never reached");
} catch (err) {
  console.log("Error has occured:", +err.stack);
} finally {
  console.log("This is always run");
}

console.group("... Then the executin Continues");

let json = '{"age":30}';
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
  console.log(user.name);
} catch (e) {
  console.log("JSON Error:" + e.message);
}

try {
  console.log(test);
} catch (error) {
  console.log(error.message);
  console.log(error.name); //mention the type of error
  console.log(error.stack); // mention in the line we got the error
} finally {
  console.log("from finally");
}

try {
  const ans = getQuotient(5, 2);
  if (ans === Infinity) {
    throw new Error("Divided by 0 Error"); // Manually We are thowing any error
  }
} catch (error) {
  console.log(error.message);
  console.log(error.name);
} finally {
  console.log("from finally");
}

function getQuotient(input1, input2) {
  if (isNaN(input1) || isNaN(input2)) {
    let error = new error("Not a valid number"); // override the error
    error.name = "NotValidNumber";
  }
  return input1 / input2;
}

try {
  const ans = getQuotient(5, 2);
  if (ans === Infinity) {
    throw new Error("Divided by 0 Error"); // Manually We are thowing any error
  }
} catch (error) {
  if (error.name === "error") {
    console.log("Fron Divided by 0 Error");
  }
  elseif(error.name === "NotValidateNumber");
  {
    console.log("Not Valid Number");
  }
} finally {
  console.log("from finally");
}

function getQuotient(input1, input2) {
  if (isNaN(input1) || isNaN(input2)) {
    let error = new error("Not a valid number"); // override the error
    error.name = "NotValidNumber";
  }
  return input1 / input2;
}
