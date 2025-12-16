const nameOne = "Piyush";
const age = 21;

console.log("My name is "+nameOne+" and my age is "+age); //old way of concatenation

// Using Template Literals (ES6 feature)
console.log(`My name is ${nameOne} and my age is ${age}`);

const gameName = new String("chess"); // String Object
console.log(gameName.toUpperCase());
console.log(gameName[5]); //undefined as there is no index 5
console.log(gameName[2]);



