/* =========================================
A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. This pattern is commonly used to handle asynchronous operations, such as fetching data from an API, handling events, or executing a function after a delay.

How Callback Functions Work:
Passing a Function as an Argument: The callback function is passed as an argument to another function.
Executing the Callback: The receiving function executes the callback at the appropriate time, typically after completing a specific task.
============================================*/
const getTodos = (callback) =>{
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange',()=>{
    if(request.readyState === 4 && request.status === 200)
    {
     callback(undefined,request.responseText);
    }else if(request.readyState === 4){
      callback("could not fetch data",undefined);
    }
  });
  
  request.open('GET','https://jsonplaceholder.typicode.com/todos/');
  
  request.send();
}

console.log(1);
console.log(2);


getTodos((err,data) =>{
 console.log('callback fired')
if(err){
  console.log(err);
}
else{
  console.log(data);
}
});

console.log(3);
console.log(4);