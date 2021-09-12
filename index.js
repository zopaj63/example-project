const helloWorld = require("./src/helloWorld");
helloWorld.printHelloWorld();

const redPokemon = require("./src/showPokemon");
fetch("https://pokeapi.co/api/v2/pokemon-color/red")
    .then(response => response.json())
    .then((json) => {
        redPokemon.printRedPokemon(json.pokemon_species);
    })
    .catch((error) => {
        console.error(error);
    });