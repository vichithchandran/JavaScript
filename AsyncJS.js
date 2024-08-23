/* =========================================
Asynchronous JavaScript refers to the techniques used in JavaScript to perform tasks without blocking the main thread of execution. This allows a program to handle multiple operations at once, making it more efficient and responsive.

In traditional, synchronous JavaScript, code execution happens sequentially. If a task takes a long time, like fetching data from a server, it blocks further code execution until the task is completed. This can lead to a poor user experience, especially in web applications, where the UI might freeze until the operation finishes.

Asynchronous JavaScript solves this problem by allowing tasks to run in the background while the main thread continues executing other code. When the asynchronous task completes, a callback function, promise, or an async/await mechanism handles the result.
============================================*/
console.log(1);
console.log(2);
setTimeout(()=>{
  console.log('callback function fired')
},2000)
console.log(3);
console.log(4);



