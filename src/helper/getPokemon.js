export const getPokemon = async(pokemon) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const resp = await fetch( url );
  const {name,abilities,sprites,types} = await resp.json();

  const pokemonData = {
    pkname:name,
    pkAbilities: abilities.map( ability => ability.ability.name ),
    pkSprite: sprites.front_default,
    pktypes: types.map( type => type.type.name)
  }


  /*const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  }));*/
  return pokemonData;
}