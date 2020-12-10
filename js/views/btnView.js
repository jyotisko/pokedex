class BtnHover {
  _parentElUl = document.querySelector('.types-ul');
  _searchBar = document.querySelector('.search-btn');
  _pokemonName = document.querySelector('.pokemon-name');
  _parentPokemonContainer = document.querySelector('#info');

  addHoverEffect() {
    const self = this;
    this._parentElUl.addEventListener('mouseover', e => {
      const btn = e.target.closest('li');
      if (!btn || btn.textContent === 'All') return;
      const color = btn.dataset.color;
      self.setStyles(btn, color, '#000');
    });
    this._parentElUl.addEventListener('mouseout', e => {
      const btn = e.target.closest('li');
      if (!btn || btn.textContent === 'All') return;
      const color = btn.dataset.color;
      self.setStyles(btn, 'rgba(0, 0, 0, 0.05)', color);
    });
  }

  setStyles(btn, bgColor, color) {
    btn.style.backgroundColor = bgColor;
    btn.style.color = color;
  }

  addHandlerType(handler) {
    this._parentElUl.addEventListener('click', e => {
      const btn = e.target.closest('li');
      if (!btn) return;
      const id = btn.dataset.id;
      handler(id);
    });
  }

  addHandlerSearch(handler) {
    const self = this;
    this._searchBar.addEventListener('click', () => {
      const query = self._pokemonName.value;
      self._pokemonName.value = '';
      if (!query) return;
      handler(`${query[0].toLowerCase()}${query.slice(1)}`);
    });
  }

  addHandlerMoreInfo(handler) {
    this._parentPokemonContainer.addEventListener('click', e => {
      const btn = e.target.closest('.more-info-btn');
      if (!btn) return;
      const id = btn.dataset.id;
      const moves = btn.dataset.moves;
      const type = btn.dataset.type;
      handler(id, type, moves);
    });
  }

}

export default new BtnHover();
