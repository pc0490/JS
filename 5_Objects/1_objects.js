const mySymbol = Symbol('mySymbol');

const myObject = {
    name: "Piyush",
    "full name": "Piyush Chauhan",
    age: 21,
    email: "piyushchauhan@example.com",
    [mySymbol]: "This is a symbol property" //this is how we define a symbol property
};

// Accessing properties
console.log(myObject.name); // Dot notation
console.log(myObject["full name"]); // Bracket notation
console.log(myObject[mySymbol]); // Accessing symbol property
console.log();

// Changing properties
myObject.email = "piyushchauhan0490@gmail.com";
console.log("Email is changed to: ", myObject.email);
console.log();

// Freezing the object so that no changes can be made to it
Object.freeze(myObject);
myObject.age = 22; // This will not change the age property since the object is frozen
console.log("Age is not changed since we froze the object ", myObject.age); // Still 21
console.log();

console.log("Here's my object: ", myObject);
