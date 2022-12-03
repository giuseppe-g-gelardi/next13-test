'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import fetchPokeDetails from './getPokemon';
import type { PokemonDetailResponse } from '../types/Pokemon';

// * The initialContext is used to set the initial value of the PokemonContext.
const initialContext = { pokemon: [] }
type PokemonContextType = { pokemon: PokemonDetailResponse[] }

// * The PokemonProvider component is used to fetch the pokemon data and
// * provide it to the app via the PokemonContext.
export const PokemonContext = createContext<PokemonContextType>(initialContext);

// * The PokemonContext is used by the usePokemon hook to provide the
// * pokemon data to the app.
export const usePokemon = () => useContext(PokemonContext)

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemon, setPokemon] = useState<PokemonDetailResponse[]>([]);

  useEffect(() => {
    const pokemonDetails = fetchPokeDetails()
      .then((pokemon) => setPokemon(pokemon))

    return () => {
      // * The cleanup function is used to cancel any pending requests
      pokemonDetails
    }
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
