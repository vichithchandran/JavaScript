/* =========================================
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. 
It can be in one of three states:

  1) Pending: The initial state; the operation has not completed yet.
  2) Fulfilled: The operation completed successfully.
  3) Rejected: The operation failed.

Creating a Promise
You can create a Promise using the Promise constructor. It takes a function (often called the executor function) with two arguments: resolve and reject. 
You call resolve when the operation is successful, and reject if it fails.

Using Promises
To use a Promise, you can chain .then() and .catch() methods to handle the resolved or rejected state.

  1) then(): Called when the Promise is fulfilled. It takes a function that receives the result.
  2)catch(): Called when the Promise is rejected. It takes a function that receives the error.
============================================*/

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
  console.log('Promise Resolved:',data);
}).catch(err=>{
  console.log("Promise Rejected:",err)
})



//promise example
// const getSomething =()=>{
//   return new Promise((resolve,reject)=>{
//     //fetch something
//     resolve("some data");
//     //reject("some error");
//   });
// }

// getSomething().then((data)=>{
//   console.log(data);
// },(err)=>{
//   console.log(err);
// });

// getSomething()
// .then(data=>{
//   console.log(data)
// })
// .catch(err=>{
//   console.log(err);
// })