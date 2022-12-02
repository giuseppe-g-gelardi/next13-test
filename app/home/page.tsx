import HomeComponent from '../components/HomeComponent'

async function getPokemon() {
  const res = await fetch(process.env.POKEMON_URL!)
  const imageUrl = process.env.POKEMON_IMAGES_URL!
  const pokemon = await res.json()

  return { pokemon, imageUrl }
}

export default async function HomePage() {
  const { pokemon, imageUrl } = await getPokemon()

  return <HomeComponent pokemon={pokemon} imageUrl={imageUrl} />
}


