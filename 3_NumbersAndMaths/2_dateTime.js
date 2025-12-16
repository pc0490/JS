const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
// console.log(myDate.toISOString()); // ISO standard format
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

const createdDate = new Date(2005, 0, 23);

const createdDate2 = new Date(2004, 11, 15, 10, 33, 30); // year, month (0-indexed), day, hours, minutes, seconds

console.log(createdDate.toDateString());
console.log(createdDate2.toLocaleString());