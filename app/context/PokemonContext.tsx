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
