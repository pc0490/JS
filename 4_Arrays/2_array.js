const hero1 = ["Spiderman", "Ironman", "Hulk", "Thor"];
const hero2 = ["Black Panther", "Wolverine", "Deadpool"];
const hero3 = ["Wanda", "Doctor Strange", "Black Widow"];
const dc_heroes = ["Batman", "Superman", "Flash"];

//using push()
hero1.push(hero2); // Adds hero2 another array at the end of hero1 
console.log("Pushing hero2 in hero1: ", hero1);

//using concat()
const allHeroes = hero2.concat(hero3); // Merges hero1 and hero2 into a new array
console.log("Concatenating hero3 in hero2: ", allHeroes);

//using spread operator ...
const combinedHeroes = [...hero2, ...hero3, ...dc_heroes]; // Merges hero2, hero3, and dc_heroes into a new array
console.log("Combining hero2, hero3 and dc_heroes: ", combinedHeroes);

//using flat()
const myHeroes = ["Marvel Heroes", ["Spiderman", "Ironman", ["Hulk", "Thor"]], "DC Heroes", ["Batman", "Superman", ["Flash", ["Green Lantern", "Aquaman"]]]];
console.log("My Heroes Array: ", myHeroes);
console.log("Flattening myHeroes: ", myHeroes.flat(3));

//is, of, from in arrays
let score1 = 100;
let score2 = 200;
let score3 = 300;

const scoresArray = Array.of(score1, score2, score3); // Creates an array from the given scores
console.log("Scores Array using Array.of(): ", scoresArray);

const scoresFromArray = Array.from("Piyush"); // Creates an array from the string "400"
console.log("Scores Array using Array.from(): ", scoresFromArray);