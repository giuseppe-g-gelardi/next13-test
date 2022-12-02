'use client'

import PokemonCard from "./PokemonCard";

interface Pokemon {
  id: string;
  name: string;
  image: string;
}

type HomeProps = {
  pokemon: Array<Pokemon>;
  imageUrl: string;
}

export default function HomeComponent({ pokemon, imageUrl }: HomeProps) {

  return (
    <div className="flex flex-wrap mx-40 mt-10 z-0 items-center justify-center">
      {pokemon.slice(0, 50).map((p: Pokemon) => ( 
        <div key={p.id}>
          <PokemonCard name={p.name} image={`${imageUrl}/${p.image}`} />
        </div>
      ))}
    </div>
  )
}



