function addTwoNumbers(a, b) {
    return a + b;
}

const result = addTwoNumbers(5, 7);
console.log("The sum is:", result); // Output: The sum is: 12
console.log();

function loginMessage(username = "piyu") {
    if (!username) {
        console.log("Please enter a name!");
        return;
    }
    return `${username} has just logged in!`;
}


console.log(loginMessage()); // Output: piyu has just logged in!
console.log(loginMessage("Piyush")); // Output: Piyush has just logged in!
