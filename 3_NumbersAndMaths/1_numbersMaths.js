const numOne = 10;
const numTwo = new Number(20);

console.log(numTwo.toFixed(2)); // returns string "20.00"

const hundreds = 100000000000;
console.log(hundreds.toLocaleString("en-IN")); // returns "10,00,00,00,000" for Indian locale

// Math Object
console.log(Math.PI); // returns 3.141592653589793
console.log(Math.round(249.7)); // returns 250
console.log(Math.floor(249.8)); // returns 249
console.log(Math.ceil(249.2)); // returns 250
console.log(Math.sqrt(16)); // returns 4
console.log(Math.pow(2, 3)); // returns 8
console.log(Math.min(10, 5, 20, 1)); // returns 1
console.log(Math.max(10, 5, 20, 1)); // returns 20
console.log(Math.random()); // returns a random number between 0 and 1

// Generating a random integer between min and max (inclusive)
const min = 10;
const max = 50;
console.log(Math.floor(Math.random() * (max-min+1)) + min); // returns a random integer between 10 and 50