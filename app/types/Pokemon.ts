
export type PokemonDetailResponse = {
  abilities: Abilities;
  base_experience: number;
  forms: Array<Forms>;
  game_indices: Array<GameIndices>;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Moves>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: Species;
  sprites: Sprites;
  stats: Array<Stats>;
  types: Array<Types>;
  weight: number;
}


type Abilities = {
  abilities: Array<any>
}
type Forms = {
  name: string;
  url: string;
}

type GameIndices = {
  game_index: number;
  version: {
    name: string;
    url: string;
  }
}

type Moves = {
  move: {
    name: string;
    url: string;
  }
  version_group_details: Array<VersionGroupDetails>
}

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  }
  version_group: {
    name: string;
    url: string;
  }
}

type Species = {
  name: string;
  url: string;
}

type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

type Types = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}




