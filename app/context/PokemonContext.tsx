'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import fetchPokeDetails from './getPokemon';
import type { PokemonDetailResponse } from '../types/Pokemon';

const initialContext = { pokemon: [] }
type PokemonContextType = { pokemon: PokemonDetailResponse[] }

export const PokemonContext = createContext<PokemonContextType>(initialContext);

export const usePokemon = () => useContext(PokemonContext)

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemon, setPokemon] = useState<PokemonDetailResponse[]>([]);

  useEffect(() => {
    const pokemonDetails = fetchPokeDetails().then((pokemon) => setPokemon(pokemon))

    return () => {
      pokemonDetails
    }

  }, []);

  return (
    <PokemonContext.Provider value={{ pokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};





 // const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=1'
  // async function getPokemon() {
  //   const response = await fetch(POKEAPI_URL);
  //   const data = await response.json();
  //   return data.results;
  // }
    // async function fetchPokeDetails() {
    //   const kantoPokemon = await getPokemon().then((pokemon) => pokemon);

    //   return await Promise.all(kantoPokemon.map(async (pokemon: any) => {
    //     return await fetch(pokemon.url).then(response => response.json())
    //   }));
    // }


  // async function fetchPokeDetails() {
  //   const kantoPokemon = await getPokemon().then((pokemon) => pokemon);

  //   const pokemonDetails = await Promise.all(kantoPokemon.map(async (pokemon: any) => {
  //     return await fetch(pokemon.url).then(response => response.json())
  //   }));

  //   return pokemonDetails
  // }

        // const pokemonDetails = await Promise.all(kantoPokemon.map(async (pokemon: any) => {
      //   return await fetch(pokemon.url).then(response => response.json())
      // }));
      // return pokemonDetails
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
