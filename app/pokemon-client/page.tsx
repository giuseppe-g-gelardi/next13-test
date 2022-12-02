'use client'

import { usePokemon } from "../context/PokemonContext"
import Link from "next/link"
import PokemonCard from "../components/PokemonCard"

export default function PokemonClientPage() {
  const { pokemon } = usePokemon()

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex flex-col items-center justify-center mt-8 text-lg">
          <h1 className="text-4xl  text-fuchsia-500 mb-6">Hey</h1>
          <p>This page uses server components!</p>
          <p>if you would like to checkout the same page on the client click
            <Link href='/pokemon-server' className='text-blue-200 font-bold underline hover:text-purple-600 mx-2'>
              HERE
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mx-40 mt-10 z-0 items-center justify-center">
        {pokemon.map(poke =>
          <PokemonCard key={poke.id} name={poke.name} image={poke.sprites.front_default!} />
        )}
      </div>
    </div>
  )
}
