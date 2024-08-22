/* =========================================
Object:
In JavaScript, an object is a collection of related data and functions, known as properties and methods, respectively. Properties are “key: value” pairs that store data, while methods are functions associated with the object that can manipulate its properties.
============================================*/
// Using the “object constructor” syntax:
const o = new Object();
o.foo = 42;
o.go ="Start"

console.log(o);// { foo: 42 }
console.log(o.foo); // 42

//Using the “object literal” syntax:

let school = {
  name: 'Vivekananda School',
  location: 'Delhi',
  established: '1971',
  displayInfo: function () {
      console.log(`${school.name} was established in ${school.established} at ${school.location}`);
  }
}

console.log("The name the school is:",school.name);
console.log(`The ${school.name} located at:`,school.location);
console.log(`The ${school.name} established in: `,school.established)

school.displayInfo(); 

