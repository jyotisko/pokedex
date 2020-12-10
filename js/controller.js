import btnView from './views/btnView.js';
import pokemonView from './views/pokemonView.js';
import * as model from './model.js';


const setPokemonOnType = async function (id) {
  const data = await model.getPokemonsByType(id);
  pokemonView.clear();
  data.forEach(pokemon => {
    pokemon.then(data => {
      pokemonView.renderMarkupPokemon(data);
    })
  });
};

const setPokemonOnName = async function (name) {
  const data = await model.getPokemonByName(name);
  pokemonView.clear();
  pokemonView.renderMarkupPokemon(data);
};

const init = () => {
  btnView.addHoverEffect();
  btnView.addHandlerType(setPokemonOnType);
  btnView.addHandlerSearch(setPokemonOnName)
};

init();


