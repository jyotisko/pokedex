export const getPokemonsByType = async type => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
  const data = await response.json();

  const pokemonInfoArr = await data.pokemon.map(async pokemon => {
    const link = pokemon.pokemon.url;
    const response = await fetch(link);
    const data = await response.json();
    return {
      id: data.id,
      pokemon: data.name,
      abilities: data.abilities.map(ability => ability.ability.name),
      image: data.sprites.front_default,
      types: data.types.map(type => type.type.name),
      weight: data.weight,
      height: data.height,
      hp: [data.stats[0].stat.name, data.stats[0].base_stat],
      attack: [data.stats[1].stat.name, data.stats[1].base_stat],
      defense: [data.stats[2].stat.name, data.stats[2].base_stat],
      specialAttack: [data.stats[3].stat.name, data.stats[3].base_stat],
      specialDefense: [data.stats[4].stat.name, data.stats[4].base_stat],
      speed: [data.stats[5].stat.name, data.stats[5].base_stat],
      moves: data.moves.map(move => move.move.name),
    };
  });

  return pokemonInfoArr;
};

export const getPokemonByName = async name => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    return {
      id: data.id,
      pokemon: data.name,
      abilities: data.abilities.map(ability => ability.ability.name),
      image: data.sprites.front_default,
      types: data.types.map(type => type.type.name),
      weight: data.weight,
      height: data.height,
      hp: [data.stats[0].stat.name, data.stats[0].base_stat],
      attack: [data.stats[1].stat.name, data.stats[1].base_stat],
      defense: [data.stats[2].stat.name, data.stats[2].base_stat],
      specialAttack: [data.stats[3].stat.name, data.stats[3].base_stat],
      specialDefense: [data.stats[4].stat.name, data.stats[4].base_stat],
      speed: [data.stats[5].stat.name, data.stats[5].base_stat],
      moves: data.moves.map(move => move.move.name),
    }

  } catch (err) {
    console.log(`${err} 💥💥💥`);
    throw new Error('No pokemon found!');
  }
};

export const getPokemonById = async id => {
  try {

  } catch (err) {
    console.log(`${err} 💥💥💥`);
  }
};

