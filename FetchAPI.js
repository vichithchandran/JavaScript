/* =========================================
The Fetch API in JavaScript provides a modern, more powerful, and flexible way to make HTTP requests. 
It is built into most modern browsers and allows you to make network requests similar to XMLHttpRequest (XHR), but with a more straightforward and cleaner syntax, making it easier to work with asynchronous operations.

Basic Usage of Fetch
The fetch() function is used to initiate a network request. It returns a Promise that resolves to the Response object representing the response to that request.

Syntax:
 fetch(url, [options])
============================================*/

fetch('todos/luigi.json').then((response) =>{
  console.log('Resolved',response)
  return response.json();
}).then(data =>{
    console.log(data)
}).catch((err)=>{
    console.log('Rejected',err)
});