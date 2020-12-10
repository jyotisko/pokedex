class MoreInfoView {
  _parentContainer = document.querySelector('main');

  _addHandlerClose() {
    this._parentContainer.addEventListener('click', e => {
      const btn = e.target.closest('.close');
      if (!btn) return;
      document.querySelector('.more-info').remove();
    });
  }

  generateMarkup(moves, type) {

    const strongAgainst = [];
    const weakAgainst = [];

    if (type === 'normal') {
      weakAgainst.push(...['Rock', 'Ghost', 'Steel']);
    } else if (type === 'fighting') {
      weakAgainst.push(...['Flying', 'Poison', 'Psychic', 'Bug', 'Ghost', 'Fairy']);
      strongAgainst.push(...['Normal', 'Rock', 'Steel', 'Ice', 'Dark']);
    } else if (type === 'flying') {
      strongAgainst.push(...['Fighting', 'Bug', 'Grass']);
      weakAgainst.push(...['Rock', 'Steel', 'Electric']);
    } else if (type === 'poison') {
      strongAgainst.push(...['Grass', 'Fairy']);
      weakAgainst.push(...['Poison', 'Ground', 'Rock', 'Ghost', 'Steel']);
    } else if (type === 'ground') {
      strongAgainst.push(...['Poison', 'Rock', 'Steel', 'Fire', 'Electric']);
      weakAgainst.push(...['Flying', 'Bug', 'Grass']);
    } else if (type === 'rock') {
      strongAgainst.push(...['Flying', 'Bug', 'Fire', 'Ice']);
      weakAgainst.push(...['Fighting', 'Ground', 'Steel']);
    } else if (type === 'bug') {
      strongAgainst.push(...['Grass', 'Psychic', 'Dark']);
      weakAgainst.push(...['Fighting', 'Flying', 'Poison', 'Ghost', 'Steel', 'Fire', 'Fairy']);
    } else if (type === 'ghost') {
      strongAgainst.push(...['Ghost', 'Psychic']);
      weakAgainst.push(...['Normal', 'Dark']);
    } else if (type === 'steel') {
      strongAgainst.push(...['Rock', 'Ice', 'Fairy']);
      weakAgainst.push(...['Steel', 'Fire', 'Water', 'Electric']);
    } else if (type === 'fire') {
      strongAgainst.push(...['Bug', 'Steel', 'Grass', 'Ice']);
      weakAgainst.push(...['Rock', 'Fire', 'Water', 'Dragon']);
    } else if (type === 'water') {
      strongAgainst.push(...['Ground', 'Rock', 'Fire']);
      weakAgainst.push(...['Water', 'Grass', 'Dragon'])
    } else if (type === 'grass') {
      strongAgainst.push(...['Ground', 'Rock', 'Water']);
      weakAgainst.push(...['Flying', 'Poison', 'Bug', 'Steel', 'Fire', 'Grass', 'Dragon']);
    } else if (type === 'electric') {
      strongAgainst.push(...['Flying', 'Water']);
      weakAgainst.push(...['Ground', 'Grass', 'Electric', 'Dragon']);
    } else if (type === 'psychic') {
      strongAgainst.push(...['Fighting', 'Poison']);
      weakAgainst.push(...['Steel', 'Psychic', 'Dark']);
    } else if (type === 'ice') {
      strongAgainst.push(...['Flying', 'Ground', 'Grass', 'Dragon']);
      weakAgainst.push(...['Steel', 'Fire', 'Water', 'Ice']);
    } else if (type === 'dragon') {
      strongAgainst.push(...['Dragon']);
      weakAgainst.push(...['Steel', 'Fairy']);
    } else if (type === 'dark') {
      strongAgainst.push(...['Ghost', 'Psychic']);
      weakAgainst.push(...['Fighting', 'Dark', 'Fairy']);
    } else if (type === 'fairy') {
      strongAgainst.push(...['Fighting', 'Dragon', 'Dark']);
      weakAgainst.push(...['Poison', 'Steel', 'Fire']);
    }

    const markup = `
          <div class="more-info">
            <div class="more-info__container">
              <div class="part__1">
                <h1 style="text-align: center;">Moves</h1>
                <div class="moves">
                ${moves.map(move => `<span>${move}</span>`).join(' ')}
                </div>
                </div>
                <div class="part__2">
                  <div class="strong">
                  <h3>Strong Against:</h3>
                  <h4>${strongAgainst.map(type => `<span>${type}</span>`).join(' ')}</h4> 
                </div>
                <div class="weak">
                  <h3>Weak Against:</h3>
                  <h4>${weakAgainst.map(type => `<span>${type}</span>`).join(' ')}</h4>
                </div>
                </div>
                <div class="part__3">
                  <button class="close">⬅ Close</button>
                </div>
              </div>
            </div>
            `;
    this._parentContainer.insertAdjacentHTML('beforeend', markup);
    this._addHandlerClose();
  }
};

export default new MoreInfoView();
