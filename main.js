// const n = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const invertArray = (array) => {

//     for (let index = array.length - 1; index >= 0;index--){
//     console.log(array[index])} 
// }
// invertArray(n)

const cuandoLlegueElPokemon = (pokemon) =>{
    console.log(pokemon.sprites.front_default)
    const image = document.getElementById("pokemon-imagen")
    image.src = pokemon.sprites.front_default
}

const pokemonName = prompt("Elige tu Pokemon:")

fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
    .then(response => response.json())
    .then(cuandoLlegueElPokemon);
