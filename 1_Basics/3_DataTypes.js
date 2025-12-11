let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null;

console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof nul); // "object" (this is a known quirk in JavaScript)

// Converting between data types
let numToStr = String(num); // Convert number to string
console.log(typeof numToStr); // "string"

let strToNum = Number(str); // Convert string to number (will be NaN)
console.log(typeof strToNum);
console.log(strToNum); // NaN

let numToBool = Boolean(num); // Convert number to boolean
console.log(typeof numToBool); // "boolean"
console.log(numToBool); // true