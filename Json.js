/* =========================================
JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write, and easy for machines to parse and generate. 
In JavaScript, JSON is used to store and exchange data, particularly between a client and a server.

JSON Structure:
  Data Types: JSON supports the following data types:
    String: "name": "John"
    Number: "age": 30
    Boolean: "isStudent": false
    Array: "colors": ["red", "green", "blue"]
    Object: "address": {"city": "New York", "zip": "10001"}
    Null: "middleName": null

    Example:
    {
      "name": "John",
      "age": 30,
      "isStudent": false,
      "courses": ["Math", "Science", "History"],
      "address": {
        "city": "New York",
        "zip": "10001"
      }
    }

JavaScript provides two primary methods for working with JSON:

1) JSON.parse(): Converts a JSON string into a JavaScript object.
2) JSON.stringify(): Converts a JavaScript object into a JSON string.

============================================*/

const getTodos = (callback) =>{
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
  
  request.open('GET','todos.json');
  
  request.send();
}


getTodos((err,data) =>{
 console.log('callback fired')
if(err){
  console.log(err);
}
else{
  console.log(data);
}
});
