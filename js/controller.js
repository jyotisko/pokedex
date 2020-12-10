import btnView from './views/btnView.js';
import pokemonView from './views/pokemonView.js';
import moreInfoView from './views/moreInfoView.js';
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
  try {
    pokemonView.clear();
    const data = await model.getPokemonByName(name);
    pokemonView.renderMarkupPokemon(data);
  } catch (err) {
    if (err.message === 'No pokemon found!')
      swal({
        title: 'No Pokemon Found!',
        text: 'Search something else,\nexample: "pichu", "pikachu"',
        icon: 'warning',
      });
  }
};

const showMoreInfo = async function (id, type, moves) {
  moreInfoView.generateMarkup(moves.split(','), type);
};

const init = () => {
  btnView.addHoverEffect();
  btnView.addHandlerType(setPokemonOnType);
  btnView.addHandlerSearch(setPokemonOnName);
  btnView.addHandlerMoreInfo(showMoreInfo);
};

init();


