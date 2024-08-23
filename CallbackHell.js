/* =========================================
Callback Hell in JavaScript refers to the situation where multiple nested callbacks are used to perform asynchronous operations, leading to code that is difficult to read, understand, and maintain. 
This happens when each asynchronous operation depends on the result of the previous one, resulting in deeply nested callbacks.
============================================*/

const getTodos = (resource,callback) =>{
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange',()=>{
    if(request.readyState === 4 && request.status === 200)
    {
      const data = JSON.parse(request.responseText)
     callback(undefined,data);
    }else if(request.readyState === 4){
      callback("could not fetch data",undefined);
    }
  });
  
  request.open('GET',resource);
  
  request.send();
}


getTodos('todos/luigi.json',(err,data) =>{
 console.log(data);
  getTodos('todos/mario.json',(err,data)=>{
    console.log(data);
    getTodos('todos/shaun.json',(err,data)=>{
      console.log(data);
    })
  })
});
