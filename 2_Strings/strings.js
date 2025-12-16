const nameOne = "Piyush";
const age = 21;

console.log("My name is "+nameOne+" and my age is "+age); //old way of concatenation

// Using Template Literals (ES6 feature)
console.log(`My name is ${nameOne} and my age is ${age}`);

const gameName = new String("chess"); // String Object
console.log(gameName.toUpperCase());
console.log(gameName[5]); //undefined as there is no index 5
console.log(gameName[2]);
console.log(gameName.indexOf('e')); //2

const newGameName = gameName.substring(0,3); //0 to 3 (3 not included)
console.log(newGameName);

const url = "https://piyush.com/piyush%20chauhan";
console.log(url.replace("%20", "-")); //replaces the string

const message = "   Hello World   ";
console.log(message.trim()); //removes spaces from start and end


const splitMessage = "Hello World, Welcome to JavaScript";
const words = splitMessage.split(" "); //splits the string into array of strings based on space
console.log(words);