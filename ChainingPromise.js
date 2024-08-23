/* =========================================
Promise chaining is a powerful feature in JavaScript that allows you to perform a series of asynchronous operations in sequence. Each operation in the chain is dependent on the completion of the previous one, and you can handle each operation's success or failure as you go along.

Basic Concept of Promise Chaining
In promise chaining, the result of one promise can be passed to the next promise in the chain, creating a sequence of asynchronous tasks. Each .then() returns a new promise, which can be further chained.

 ========================================= */

 const getTodos = (resource) =>{
  return new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
      if(request.readyState === 4 && request.status === 200)
      {
        const data = JSON.parse(request.responseText)
        resolve(data);
      }else if(request.readyState === 4){
        reject('Error getting resorce')
      }
    });
    
    request.open('GET',resource);
    
    request.send();
  });
 
};

getTodos('todos/luigi.json').then(data=>{
  console.log('Promise 1 Resolved:',data);
  return getTodos('todos/mario.json');
}).then(data=>{
  console.log("Promise 2 Resolved:",data)
  return getTodos('todos/shaun.json')
}).then(data =>{
  console.log("Promise 3 resolved:",data)
}).catch(err=>{
  console.log("Promise Rejected:",err)
})
