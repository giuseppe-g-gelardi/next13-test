

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=151'


async function getPokemon() {
  const response = await fetch(POKEAPI_URL);
  const data = await response.json();
  return data.results;
}

export default async function fetchPokeDetails() {
  const kantoPokemon = await getPokemon().then((pokemon) => pokemon);

  return await Promise.all(kantoPokemon.map(async (pokemon: any) => {
    return await fetch(pokemon.url).then(response => response.json())
  }));
}
