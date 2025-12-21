const obj1 = {
    1: 'one',
    2: 'two',
    3: 'three'
}

const obj2 = {
    4: 'four',
    5: 'five',
    6: 'six'
}

const obj3 = {
    7: 'seven',
    8: 'eight',
    9: 'nine'
}

//Using Object.assign
const mergedObject1 = Object.assign({}, obj1, obj2, obj3);
console.log("Merged Object using Object.assign(): ", mergedObject1);
console.log();

//Using Spread Operator
const mergedObject2 = { ...obj1, ...obj2, ...obj3 };
console.log("Merged Object using Spread Operator: ", mergedObject2);
console.log();

const studentObject = {
    name: "Piyush",
    age: 21,
    marks: {
        math: 95,
        physics: 90,
        chemistry: 92
    }
}

// Retrieving nested property
console.log("Math marks: ", studentObject.marks.math);
console.log();

// Array Key and Value Pairs
console.log(Object.keys(studentObject));
console.log(Object.values(studentObject));

//Entries
console.log(Object.entries(studentObject));