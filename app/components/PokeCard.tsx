'use client'

import Image from "next/image";
import { useState } from "react";
import { PokemonDetailResponse } from "../types/Pokemon";
import Modal from "./Modal";

export default function PokeCard({ pokemon }: { pokemon: PokemonDetailResponse }) {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative h-80 mx-4">
      <button className='relative h-64 w-64 bg-slate-200 dark:bg-slate-600 rounded-[24px]' onClick={() => setIsOpen(true)}>
        <Image src={pokemon.sprites.front_default!} fill alt='' onClick={() => setShowDetails(!showDetails)} />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={pokemon.name} images={pokemon.sprites} />
      </button>
    </div>
  )
}


