
async function obtenerPokemonAleatorio() {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
      const pokemons = res.data.results;
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      const randomPokemon = pokemons[randomIndex];
      
      return randomPokemon;
    } catch (error) {
      console.error('Error al obtener un Pokémon aleatorio', error);
      throw error;
    }
  }

  async function obtenerDetallesPokemon(pokemon) {
    try {
      const res = await axios.get(pokemon.url);
      const pokemonData = res.data;
      const { name, sprites } = pokemonData;
  
      return { name, image: sprites.front_default };

    } catch (error) {
      console.error('Error al obtener detalles del Pokémon', error);

      throw error;
    }
  }
  