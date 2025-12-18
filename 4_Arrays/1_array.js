const myArr = new Array("Hello", 34, true, 45, "World");
console.log(myArr[0]); // Output: Hello
console.log(myArr[2]); // Output: true

myArr.push("New Element Pushed");
console.log(myArr); // Output: [ 'Hello', 34, true, 45, 'World', 'New Element Pushed' ]

console.log(myArr.includes(9)); // Output: false
console.log(myArr.indexOf(9)); // Output: -1

const newArr = myArr.join(", ");
console.log(newArr); // Output: Hello, 34, true, 45, World, New Element Pushed as a single string
console.log(typeof(myArr)); // Output: object
console.log(typeof(newArr)); // Output: string

// Additional array methods demonstration -> Slice and Splice
const slicedArr = myArr.slice(2, 5);
console.log(slicedArr); // Output: [true, 45, 'World'] 



console.log("Array before splice:", myArr);
const splicedArr = myArr.splice(1, 3);
console.log("Array after splice:", myArr); // Output: [ 'Hello', 'World', 'New Element Pushed' ]
console.log("Spliced elements:", splicedArr); // Output: [34, true, 45]

