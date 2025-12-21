const pokemon = {
    name: "Pikachu",
    type: "Electric",
    level: 25,
}

// Destructuring assignment
// Instead of writing: console.log(pokemon.name); console.log(pokemon.type); console.log(pokemon.level);
// We can use destructuring to extract the properties into variables
const { name, type, level } = pokemon;

console.log("Pokemon Name: ", name);
console.log("Pokemon Type: ", type);
console.log("Pokemon Level: ", level);
console.log();