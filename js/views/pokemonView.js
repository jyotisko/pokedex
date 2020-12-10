import { statisticBarColors } from './../config.js';

class PokemonView {
  _parentContainer = document.querySelector('#info');

  renderMarkupPokemon(data) {
    // console.log(data);
    const markup = `
    <div class="pokemon" data-id="${data.id}">
      <div class="part__1">
        <figure>
          <div class="height-weight">
            <div class="height circle">${data.height}m</div>
            <div class="weight circle">${data.weight}kg</div>
          </div>
          <div class="image">
            <div class="id-number">#${data.id}</div>
            <img class="pokemon-image" src="${data.image}" alt="Pokemon">
          </div>
          <div class="name-main-type">
            <h2 class="name">${data.pokemon[0].toUpperCase()}${data.pokemon.slice(1)}</h2>
            <h3 class="main-type">${data.types[0][0].toUpperCase()}${data.types[0].slice(1)} Pokemon</h3>
            <h3 class="other-type">${data.types.map(type => `<span>${type}</span>`).join(' ')}</h3>
          </div>
          <div class="other-types">
            <h3>${data.abilities.map(ability => `<span>${ability}</span>`).join(' ')}</h3>
          </div>
        </figure>
      </div>

      <div class="part__2">
        <div class="stats__info">
          <div class="hp stat">
            <h3 class="name">HP</h3>
            <h3 class="value">${data.hp[1]}</h3>
            <div class="chart">
              <span style="width: ${data.hp[1]}%; background-color: ${statisticBarColors[Math.floor(Math.random() * statisticBarColors.length)]}"></span>
            </div>
          </div>
          <div class="attack stat">
            <h3 class="name">Attack</h3>
            <h3 class="value">${data.attack[1]}</h3>
            <div class="chart">
              <span style="width: ${data.attack[1]}%; background-color: ${statisticBarColors[Math.floor(Math.random() * statisticBarColors.length)]}"></span>
            </div>
          </div>
          <div class="defense stat">
            <h3 class="name">Defense</h3>
            <h3 class="value">${data.defense[1]}</h3>
            <div class="chart">
              <span style="width: ${data.defense[1]}%; background-color: ${statisticBarColors[Math.floor(Math.random() * statisticBarColors.length)]}"></span>
            </div>
          </div>
          <div class="special-attack stat">
            <h3 class="name">Special-Attack</h3>
            <h3 class="value">${data.specialAttack[1]}</h3>
            <div class="chart">
              <span style="width: ${data.specialAttack[1]}%; background-color: ${statisticBarColors[Math.floor(Math.random() * statisticBarColors.length)]}"></span>
            </div>
          </div>
          <div class="special-defense stat">
            <h3 class="name">Special-Defense</h3>
            <h3 class="value">${data.specialDefense[1]}</h3>
            <div class="chart">
              <span style="width: ${data.specialDefense[1]}%; background-color: ${statisticBarColors[Math.floor(Math.random() * statisticBarColors.length)]}"></span>
            </div>
          </div>
          <div class="speed stat">
            <h3 class="name">Speed</h3>
            <h3 class="value">${data.speed[1]}</h3>
            <div class="chart">
              <span style="width: ${data.speed[1]}%; background-color: ${statisticBarColors[Math.floor(Math.random() * statisticBarColors.length)]}"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="part__3">
        <a href="#">Show info <img src="../../images/pokeball.svg"></a>
      </div>
    </div>
    `;
    this._parentContainer.insertAdjacentHTML('beforeend', markup);
  }

  clear() {
    this._parentContainer.innerHTML = '';
  }
};

export default new PokemonView();
