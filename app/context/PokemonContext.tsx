'use client'

import { stringify } from 'querystring';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export const PokemonContext = createContext(null);

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=151'

export const usePokemon = () => useContext(PokemonContext)



export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  // const [pokemon, setPokemon] = useState<any[]>([]);

  // async function fetchKantoPokemon() {
  //   return await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
  //     .then(response => response.json()).then(a => a.results)
  // }

  // async function fetchPokeDetails() {
  //   const kantoPokemon = await fetchKantoPokemon()
  //   const pokemonDetails = await Promise.all(kantoPokemon.map(async (pokemon: any) => {
  //     return await fetch(pokemon.url).then(response => response.json())
  //   }))
  //   setPokemon(pokemonDetails)
  //   // return pokemonDetails
  // }

  // useEffect(() => {
  //   console.log(pokemon)
  //   console.log('context')
  // }, [pokemon])


  return (
    <PokemonContext.Provider value={null}>
      {children}
    </PokemonContext.Provider>
  );
};
