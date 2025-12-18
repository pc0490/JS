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