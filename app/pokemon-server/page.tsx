import Link from "next/link";
import PokeCard from "../components/PokeCard";
import { PokemonDetailResponse } from "../types/Pokemon";

type Pokemon = {
  name: string;
  url: string;
}

// * The fetchKantoPokemon function is used to fetch the first 9 pokemon from the
// * Kanto region.
async function fetchKantoPokemon(): Promise<Array<Pokemon>> {
  return await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then(response => response.json()).then(a => a.results)
}

// * The fetchPokeDetails function is used to fetch the details for each pokemon.
async function fetchPokeDetails(): Promise<Array<PokemonDetailResponse>> {
  const kantoPokemon = await fetchKantoPokemon()
  const pokemonDetails = await Promise.all(kantoPokemon.map(async (pokemon: Pokemon) => {
    return await fetch(pokemon.url).then(response => response.json())
  }))
  return pokemonDetails
}

export default async function PokemonServerPage() {
  const pokemonDetails = await fetchPokeDetails()

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex flex-col items-center justify-center mt-8 text-lg">
          <h1 className="text-4xl text-rose-400 mb-6">Hey</h1>
          <p>This page uses server components!</p>
          <p>if you would like to checkout the same page rendered on the client click
            <Link href='/pokemon-client' className='text-rose-400 font-bold underline hover:text-purple-600 mx-2'>
              HERE
            </Link>
          </p>
          <p className="mt-4 text-rose-400 dark:text-cyan-500">Click on a pokemon for more details!</p>
        </div>
      </div>
      <div className="flex flex-wrap mx-40 mt-10 z-0 items-center justify-center">
        {pokemonDetails.map(poke =>
          <div key={poke.id}><PokeCard pokemon={poke} /></div>
        )}
      </div>
    </div>
  )
}

