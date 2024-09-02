/* =========================================
async and await:

async and await are key components of modern JavaScript that make working with asynchronous code more readable and maintainable. They are used to handle promises in a more synchronous-like manner.

  1)async Function:
  An async function is a function that returns a Promise. It allows you to use await within it to wait for the resolution of a promise.

  Syntax:

  async function myFunction() {
    // code here
  }
  or

  const myFunction = async () => {
    // code here
  };

  Example:
  async function fetchData() {
    return "Data fetched!";
  }



  2)await Keyword:
  The await keyword is used to wait for a promise to resolve or reject. It can only be used inside an async function. When await is used, the execution of the async function is paused until the promise settles.

  Syntax:
  let result = await promise;

  Example:
  async function fetchData() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched!"), 1000);
    });

    let result = await promise; // wait until the promise resolves
    console.log(result); // Output: Data fetched!
  }

  fetchData();

  3)Error Handling with async/await:
  You can handle errors in async functions using try...catch.

  Example:

  async function fetchData() {
    try {
      let response = await fetch("https://api.example.com/data");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();

  4) Parallel Execution with async/await:
  If you want to execute multiple asynchronous operations in parallel, you can use Promise.all().

  In this example, if the fetch operation fails (e.g., due to network issues), the error is caught in the catch block.on with async/await
If you want to execute multiple asynchronous operations in parallel, you can use Promise.all().

Example:

async function fetchMultipleData() {
  const [data1, data2] = await Promise.all([
    fetch("https://api.example.com/data1").then(res => res.json()),
    fetch("https://api.example.com/data2").then(res => res.json()),
  ]);

  console.log(data1, data2);
}

fetchMultipleData();

============================================*/
const getTodos = async () => {
  const response = await fetch("todos/luigi.json");
  const data = await response.json();

  return data;
};

getTodos().then((data) => console.log("Resolved:", data));

// fetch('todos/luigi.json').then((response) =>{
//   console.log('Resolved',response)
//   return response.json();
// }).then(data =>{
//     console.log(data)
// }).catch((err)=>{
//     console.log('Rejected',err)
// });
