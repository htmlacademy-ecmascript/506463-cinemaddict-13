import AbstractView from "./abstract.js";
import {FilterType} from "../const";
import {checkActiveElement} from "../utils/project.js";

const createFilterItemTemplate = (filters, currentFilterType) => {
  const [WATCHLIST, WATCHED, FAVORITES] = filters;

  const checkedClass = `main-navigation__item--active`;

  const isAllFilter = checkActiveElement(currentFilterType === FilterType.ALL, checkedClass);
  const isWatchlistFilter = checkActiveElement(currentFilterType === FilterType.WATCHLIST, checkedClass);
  const isWatchedFilter = checkActiveElement(currentFilterType === FilterType.WATCHED, checkedClass);
  const isFavoriteFilter = checkActiveElement(currentFilterType === FilterType.FAVORITES, checkedClass);

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" data-filter-type="${FilterType.ALL}" class="main-navigation__item ${isAllFilter}">All movies</a>
        <a href="#watchlist" data-filter-type="${FilterType.WATCHLIST}" class="main-navigation__item ${isWatchlistFilter}">Watchlist <span class="main-navigation__item-count">${WATCHLIST.count}</span></a>
        <a href="#history" data-filter-type="${FilterType.WATCHED}" class="main-navigation__item ${isWatchedFilter}">History <span class="main-navigation__item-count">${WATCHED.count}</span></a>
        <a href="#favorites" data-filter-type="${FilterType.FAVORITES}" class="main-navigation__item ${isFavoriteFilter}">Favorites <span class="main-navigation__item-count">${FAVORITES.count}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export default class Filter extends AbstractView {
  constructor(filters, currentFilterType) {
    super();
    this._filters = filters;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  _getTemplate() {
    return createFilterItemTemplate(this._filters, this._currentFilter);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.dataset.filterType);
  }

   setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`click`, this._filterTypeChangeHandler);
  }
}
