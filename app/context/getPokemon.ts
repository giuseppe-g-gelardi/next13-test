
const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=9' 
// adjust the limit to get more or less pokemon

// * the getPokemon function is used to fetch the pokemon data from the pokeapi
async function getPokemon() {
  const response = await fetch(POKEAPI_URL);
  const data = await response.json();
  return data.results;
}

// * the fetchPokeDetails function is used to fetch the pokemon details from the pokeapi
export default async function fetchPokeDetails() {
  const kantoPokemon = await getPokemon().then((pokemon) => pokemon);

  return await Promise.all(kantoPokemon.map(async (pokemon: any) => {
    return await fetch(pokemon.url).then(response => response.json())
  }));
}
