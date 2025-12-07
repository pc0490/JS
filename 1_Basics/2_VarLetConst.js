//const accountID; // This will throw an error because 'const' variables must be initialized at the time of declaration.

//accountID = 12345; // Attempting to assign a value later will also throw an error.
const accountID = 12345; // Correct usage of 'const' with initialization.

const accountID2 = 67890; // Correct usage of 'const' with initialization.
var name = "Piyush";
let age;
age = 21; // 'let' allows declaration first and assignment later.
let gender;


console.table({ accountID, accountID2, name, age, gender});

// var can be re-declared and updated, let can be updated but not re-declared, and const cannot be updated or re-declared.