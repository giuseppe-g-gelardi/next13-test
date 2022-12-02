'use client'

import Image from "next/image";
import { useState } from "react";

interface PokemonCardProps {
  name: string;
  image: string;
}

export default function PokemonCard({ name, image }: PokemonCardProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="relative h-80 mx-4">
      <div className='relative h-64 w-64'>
        <Image src={image} fill alt='' onClick={() => setShowDetails(!showDetails)} />
      </div>
      {showDetails && <div className="flex items-center justify-center">{name}</div>}
    </div>
  )
}
