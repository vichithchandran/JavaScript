/*============================================
An HTTP (Hypertext Transfer Protocol) request is a message sent by a client to a server to request resources or perform actions on a web server. 
HTTP is the foundational protocol used on the web, and it defines how messages are formatted and transmitted, as well as how web servers and browsers (or other clients) should respond to various commands.
============================================*/
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
  // console.log(request,request.readyState);
  if(request.readyState === 4 && request.status === 200)
  {
    console.log(request, request.responseText);
  }else if(request.readyState === 4){
     console.log('could not fetch the data')
  }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/');

request.send();