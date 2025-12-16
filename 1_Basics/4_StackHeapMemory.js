// Stack is used for Primitive data types such as Number, String, Boolean, Undefined, Null, Symbol, and BigInt

let nameOne = "Piyush"; // Stored in Stack
let ageOne = 24; // Stored in Stack
let nameTwo = nameOne; // A copy of the value is made in Stack
nameTwo = "John"; // Changing nameTwo does not affect nameOne

console.log(nameOne); // Outputs: "Piyush"
console.log(nameTwo); // Outputs: "John"


// Heap is used for Reference data types such as Objects, Arrays, and Functions

let personOne = { name: "Piyush", age: 24 }; // Stored in Heap
let personTwo = personOne; // A reference to the same object in Heap
personTwo.age = 30; // Changing personTwo affects personOne

console.log(personOne.age); // Outputs: 30
console.log(personTwo.age); // Outputs: 30