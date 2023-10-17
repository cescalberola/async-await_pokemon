
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
  
  function mostrarPokemonEnDOM(pokemon) {
    const nombrePokemon = document.getElementById('pokemonName');
    const imagenPokemon = document.getElementById('pokemonImg');
  
    nombrePokemon.textContent = pokemon.name;
    imagenPokemon.src = pokemon.image;
  }

async function obtenerYMostrarPokemon() {
    try {
      const randomPokemon = await obtenerPokemonAleatorio();
      const detallesPokemon = await obtenerDetallesPokemon(randomPokemon);
      mostrarPokemonEnDOM(detallesPokemon);

    } catch (error) {
      console.error('Error al obtener y mostrar el Pokémon', error);
    }
  }
  
  obtenerYMostrarPokemon();
  
  const refreshButton = document.getElementById('refresh-button');
  refreshButton.addEventListener('click', obtenerYMostrarPokemon);
  