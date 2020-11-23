/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: MAX_DESCRIPTION_LENGTH, EMOJIS, SortType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DESCRIPTION_LENGTH", function() { return MAX_DESCRIPTION_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMOJIS", function() { return EMOJIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
const MAX_DESCRIPTION_LENGTH = 140;

const EMOJIS = [`smile`, `angry`, `puke`, `sleeping`];

const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`,
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/project.js */ "./src/utils/project.js");
/* harmony import */ var _view_film_count_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/film-count.js */ "./src/view/film-count.js");
/* harmony import */ var _view_user_rating_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/user-rating.js */ "./src/view/user-rating.js");
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/filter.js */ "./src/view/filter.js");
/* harmony import */ var _view_films_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/films-sort.js */ "./src/view/films-sort.js");
/* harmony import */ var _view_film_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/film-list.js */ "./src/view/film-list.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _view_film_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/film-details.js */ "./src/view/film-details.js");
/* harmony import */ var _view_comments_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/comments.js */ "./src/view/comments.js");
/* harmony import */ var _view_top_rated_films_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/top-rated-films.js */ "./src/view/top-rated-films.js");
/* harmony import */ var _view_most_commented_films_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/most-commented-films.js */ "./src/view/most-commented-films.js");
/* harmony import */ var _view_no_films_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/no-films.js */ "./src/view/no-films.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");


















const FILM_COUNT_PER_STEP = 5;
const FILM_EXTRA_COUNT = 2;

const films = new Array(_view_film_count_js__WEBPACK_IMPORTED_MODULE_2__["FILM_COUNT"]).fill().map(_mock_film_js__WEBPACK_IMPORTED_MODULE_14__["generateFilm"]);
const filters = Object(_mock_filter_js__WEBPACK_IMPORTED_MODULE_15__["generateFilmsFilter"])(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

const filmListComponent = new _view_film_list_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
const filmListElement = filmListComponent.getElement().querySelector(`.films-list`);
const filmsContainerElement = filmListElement.querySelector(`.films-list__container`);

const renderFilmDetails = (film) => {
  const filmDetailsComponent = new _view_film_details_js__WEBPACK_IMPORTED_MODULE_9__["default"](film);
  const filmDetailsFormElement = filmDetailsComponent.getElement().querySelector(`.film-details__inner`);
  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmListComponent.getElement(), filmDetailsComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmDetailsFormElement, new _view_comments_js__WEBPACK_IMPORTED_MODULE_10__["default"](film).getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  const closeFilmDetails = () => {
    filmDetailsComponent.getElement().remove();
  };

  const detailsScreenEscPressHandler = (evt) => Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_1__["escPressHandler"])(evt, closeFilmDetails);

  if (filmDetailsComponent.getElement()) {
    document.addEventListener(`keydown`, detailsScreenEscPressHandler);
  } else {
    document.removeEventListener(`keydown`, detailsScreenEscPressHandler);
  }

  filmDetailsComponent.setCloseButtonClickHandler(() => {
    closeFilmDetails();
    document.removeEventListener(`keydown`, detailsScreenEscPressHandler);
  });
};

const renderFilm = (filmsContainer, film) => {
  const filmCardComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_7__["default"](film);

  // Открывает попап
  filmCardComponent.setFilmCardClickHandler(() => {
    renderFilmDetails(film);
  });

  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsContainer, filmCardComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
};

const renderFilmsList = (filmListContainer, filmList) => {
  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmListContainer, filmListComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  for (let i = 0; i < Math.min(filmList.length, FILM_COUNT_PER_STEP); i++) {
    renderFilm(filmsContainerElement, filmList[i]);
  }

  if (filmList.length > FILM_COUNT_PER_STEP) {
    let renderedFilmCount = FILM_COUNT_PER_STEP;
    const showMoreButtonComponent = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmListElement, showMoreButtonComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

    showMoreButtonComponent.setShowMoreClickHandler(() => {
      filmList
        .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
        .forEach((film) => renderFilm(filmsContainerElement, film));

      renderedFilmCount += FILM_COUNT_PER_STEP;

      if (renderedFilmCount >= filmList.length) {
        showMoreButtonComponent.getElement().remove();
      }
    });
  }

  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmListComponent.getElement(), new _view_top_rated_films_js__WEBPACK_IMPORTED_MODULE_11__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmListComponent.getElement(), new _view_most_commented_films_js__WEBPACK_IMPORTED_MODULE_12__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  const filmsExtraListElement = filmListComponent.getElement().querySelectorAll(`.films-list--extra`);

  filmsExtraListElement.forEach((filmExtraListElement) => {
    const filmsExtraContainerElement = filmExtraListElement.querySelector(`.films-list__container`);

    for (let i = 0; i < FILM_EXTRA_COUNT; i++) {
      renderFilm(filmsExtraContainerElement, filmList[i]);
    }
  });
};

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteHeaderElement, new _view_user_rating_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, new _view_filter_js__WEBPACK_IMPORTED_MODULE_4__["default"](filters).getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, new _view_films_sort_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

if (_view_film_count_js__WEBPACK_IMPORTED_MODULE_2__["FILM_COUNT"] === 0) {
  Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, new _view_no_films_js__WEBPACK_IMPORTED_MODULE_13__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
} else {
  renderFilmsList(siteMainElement, films);
}

const filmCountElement = document.querySelector(`.footer__statistics`);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmCountElement, new _view_film_count_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);


/***/ }),

/***/ "./src/mock/film.js":
/*!**************************!*\
  !*** ./src/mock/film.js ***!
  \**************************/
/*! exports provided: generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/project.js */ "./src/utils/project.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const NAMES_MIN_COUNT = 2;
const NAMES_MAX_COUNT = 4;
const GENRES_MIN_COUNT = 1;
const GENRES_MAX_COUNT = 4;

const COMMENT_MIN_COUNT = 1;
const COMMENT_MAX_COUNT = 5;
const RATING_MIN_VALUE = 1;
const RATING_MAX_VALUE = 10;

const FILM_CREATE_MIN_YEAR = 1900;
const FILM_CREATE_MAX_YEAR = 2020;
const FILM_MIN_DURATION = 1200;
const FILM_MAX_DURATION = 14400;

const COMMENTS_MIN_COUNT = 1;
const COMMENTS_MAX_COUNT = 5;

const DATE_OF_FIRST_COMMENT = `2010, 2, 1`;

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const filmTitles = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
];

const filmPosters = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const descriptionString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const descriptionArray = descriptionString.split(`. `);

const filmGenres = [`Western`, `Musical`, `Drama`, `Comedy`, `Cartoon`, `Horror`, `Film-Noir`, `Mystery`];

const filmOriginTitles = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
];

const namesOfDirectors = [
  `Steven Spielberg`,
  `Martin Scorsese `,
  `Alfred Hitchcock`,
  `Stanley Kubrick`,
  `Quentin Tarantino`,
  `Orson Welles`,
  `Francis Ford Coppola`,
  `Ridley Scott`,
];

const namesOfWriters = [
  `David O. Russell`,
  `James Cameron`,
  `Aaron Sorkin`,
  `John Ridley`,
  `Quentin Tarantino`,
  `Steven Spielberg`,
];

const namesOfActors = [
  `Robert De Niro`,
  `Jack Nicholson`,
  `Meryl Streep`,
  `Tom Hanks`,
  `Leonardo DiCaprio`,
  `Kate Winslet`,
  `Jodie Foster`,
  `Charles Chaplin`,
];

const names = [
  `John Smith`,
  `Lise Kane`,
  `Michel Mur`,
  `Genry Right`,
  `Mary Black`,
  `Tim Bert`,
];

const countries = [`Canada`, `China`, `UK`, `Russia`, `Australia`, `USA`];
const ageLimits = [`0+`, `6+`, `12+`, `14+`, `16+`, `18+`];


const date = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomDate"])(new Date(DATE_OF_FIRST_COMMENT), new Date());
const minuteFormat = (date.getMinutes() < 10 ? `0` : ``) + date.getMinutes();

const filmComment = {
  emoji: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getElementFromArray"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["EMOJIS"]),
  comment: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateSentenceFromString"])(descriptionString),
  commentDate: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${minuteFormat}`,
  author: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getElementFromArray"])(names),
};

const generateFilmComment = () => {
  const {emoji, comment, commentDate, author} = filmComment;

  return {
    emoji,
    comment,
    commentDate,
    author,
  };
};

const generateFilm = () => {
  const id = generateId();
  const filmTitle = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getElementFromArray"])(filmTitles);
  const filmPoster = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getElementFromArray"])(filmPosters);
  const description = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomArray"])(descriptionArray, 1, 5);
  const rating = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(RATING_MIN_VALUE, RATING_MAX_VALUE).toFixed(1);
  const filmCreateYear = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(FILM_CREATE_MIN_YEAR, FILM_CREATE_MAX_YEAR);

  const filmDurationInSecond = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(FILM_MIN_DURATION, FILM_MAX_DURATION);
  const filmDuration = Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_1__["getFormatTime"])(filmDurationInSecond);
  const genres = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomArray"])(filmGenres, GENRES_MIN_COUNT, GENRES_MAX_COUNT);
  const commentsCount = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT);

  const filmOriginTitle = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getElementFromArray"])(filmOriginTitles);
  const director = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getElementFromArray"])(namesOfDirectors);
  const writers = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomArray"])(namesOfWriters, NAMES_MIN_COUNT, NAMES_MAX_COUNT).join(`, `);
  const actors = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomArray"])(namesOfActors, NAMES_MIN_COUNT, NAMES_MAX_COUNT).join(`, `);
  const country = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getElementFromArray"])(countries);
  const ageLimit = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getElementFromArray"])(ageLimits);

  const comments = new Array(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)).fill().map(generateFilmComment);


  return {
    id,
    filmTitle,
    filmPoster,
    description,
    rating,
    filmCreateYear,
    filmDuration,
    genres,
    commentsCount,

    filmOriginTitle,
    director,
    writers,
    actors,
    date,
    country,
    ageLimit,
    isWatchlist: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isWatched: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isFavorite: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isEmoji: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    comments,
  };
};


/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilmsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmsFilter", function() { return generateFilmsFilter; });
const generateFilmsFilter = (films) => {
  return {
    watchlist: films.filter((film) => film.isWatchlist).length,
    history: films.filter((film) => film.isWatched).length,
    favorites: films.filter((film) => film.isFavorite).length,
  };
};


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getRandomNumber, getElementFromArray, generateSentenceFromString, generateRandomArray, generateRandomDate, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementFromArray", function() { return getElementFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSentenceFromString", function() { return generateSentenceFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomArray", function() { return generateRandomArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomDate", function() { return generateRandomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getElementFromArray = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const generateSentenceFromString = (string) => {
  const sentencesArray = string.split(`. `);
  const sentence = getElementFromArray(sentencesArray);

  return sentence;
};

const generateRandomArray = (array, minCount, maxCount) => {
  const count = getRandomInteger(minCount, maxCount);
  const randomArray = new Array(count).fill().map(() => getElementFromArray(array));

  return randomArray;
};

const generateRandomDate = function (start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// обновляет массив, заменяя обновлённый элемент
const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/utils/project.js":
/*!******************************!*\
  !*** ./src/utils/project.js ***!
  \******************************/
/*! exports provided: getFormatTime, checkActiveElement, escPressHandler, sortByDate, sortByRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatTime", function() { return getFormatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkActiveElement", function() { return checkActiveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escPressHandler", function() { return escPressHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDate", function() { return sortByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByRating", function() { return sortByRating; });
const getFormatTime = (seconds) => {
  const hours = `${Math.floor(seconds / 3600)}h`;
  const minutes = `${Math.floor(seconds / 60) % 60}m`;
  const formatTime = hours.slice(0, 1) === `0` ? `${minutes}` : `${hours} ${minutes}`;

  return formatTime;
};

const checkActiveElement = (active, activeClass) => active
  ? activeClass
  : ``;

const escPressHandler = (evt, action) => {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    evt.preventDefault();
    action();
  }
};

const getWeightForNoDataFilm = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};

const sortByDate = (filmA, filmB) => {
  const weight = getWeightForNoDataFilm(filmA.date, filmB.date);

  if (weight !== null) {
    return weight;
  }

  return filmB.date.getTime() - filmA.date.getTime();
};

const sortByRating = (filmA, filmB) => {
  const weight = getWeightForNoDataFilm(filmA.rating, filmB.rating);

  if (weight !== null) {
    return weight;
  }

  return filmB.rating - filmA.rating;
};



/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, renderTemplate, render, generateTemplate, createElement, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTemplate", function() { return generateTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

const render = (container, child, place) => {

  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN
      : container.prepend(child);
      break;
    case RenderPosition.BEFOREEND
      : container.append(child);
      break;
  }
};

const generateTemplate = (array, template) => {
  return array.map((element) => template(element)).join(``);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate.`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/comments.js":
/*!******************************!*\
  !*** ./src/view/comments.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comments; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");




const createCommentTemplate = (commentElement) => {
  const {emoji, comment, commentDate, author} = commentElement;

  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${commentDate}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
};

const createEmojiTemplate = (emoji) => {
  return `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji} checked">
    <label class="film-details__emoji-label" for="emoji-${emoji}">
      <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji-${emoji}">
    </label>`;
};


const createCommentsListTemplate = (film) => {
  const {comments} = film;

  const commentTemplate = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["generateTemplate"])(comments, createCommentTemplate);
  const emojiTemplate = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["generateTemplate"])(_const_js__WEBPACK_IMPORTED_MODULE_0__["EMOJIS"], createEmojiTemplate);

  return `<div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">
          ${commentTemplate}
        </ul>

        <div class="film-details__new-comment">
          <div for="add-emoji" class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            ${emojiTemplate}
          </div>
        </div>
      </section>
    </div>`;
};

class Comments extends _view_abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(film) {
    super();
    this._film = film;
  }

  _getTemplate() {
    return createCommentsListTemplate(this._film);
  }
}


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/project.js */ "./src/utils/project.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");




const createFilmCardTemplate = (film) => {

  const {filmPoster, filmTitle, rating, filmCreateYear, filmDuration, genres, description, commentsCount, isWatchlist, isWatched, isFavorite} = film;

  const shortDescription = description.toString().length > _const_js__WEBPACK_IMPORTED_MODULE_0__["MAX_DESCRIPTION_LENGTH"] ? `${description.slice(0, _const_js__WEBPACK_IMPORTED_MODULE_0__["MAX_DESCRIPTION_LENGTH"] - 1)} …` : description;

  const genre = genres[0];

  const activeClass = `film-card__controls-item--active`;

  const isWatchlistActive = Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_1__["checkActiveElement"])(isWatchlist, activeClass);
  const isWatchedActive = Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_1__["checkActiveElement"])(isWatched, activeClass);
  const isFavoriteActive = Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_1__["checkActiveElement"])(isFavorite, activeClass);

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${filmTitle}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${filmCreateYear}</span>
        <span class="film-card__duration">${filmDuration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="./images/posters/${filmPoster}" alt="" class="film-card__poster">
      <p class="film-card__description">${shortDescription}</p>
      <a class="film-card__comments">${commentsCount} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlistActive}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatchedActive}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavoriteActive}">Mark as favorite</button>
      </form>
    </article>`
  );
};

class FilmCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(film) {
    super();
    this._film = film;

    this._filmCardClickHandler = this._filmCardClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  _getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  _filmCardClickHandler(evt) {
    if (evt.target.classList.contains(`film-card__poster`)
      || evt.target.classList.contains(`film-card__title`)
      || evt.target.classList.contains(`film-card__comments`)) {
      evt.preventDefault();
      this._callback.filmCardClick();
    }
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setFilmCardClickHandler(callback) {
    this._callback.filmCardClick = callback;
    this.getElement()
        .addEventListener(`click`, this._filmCardClickHandler);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement()
        .querySelector(`.film-card__controls-item--add-to-watchlist`)
        .addEventListener(`click`, this._watchlistClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement()
        .querySelector(`.film-card__controls-item--mark-as-watched`)
        .addEventListener(`click`, this._watchedClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/film-count.js":
/*!********************************!*\
  !*** ./src/view/film-count.js ***!
  \********************************/
/*! exports provided: FILM_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_COUNT", function() { return FILM_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRating; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");




const FILM_COUNT = 12;
const FILM_MIN_COUNT = 100500;
const FILM_MAX_COUNT = 1000500;

const ALL_FILM_COUNT = (FILM_COUNT === 0)
  ? 0
  : Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(FILM_MIN_COUNT, FILM_MAX_COUNT);

const filmsCountFormat = ALL_FILM_COUNT.toLocaleString(`ru-RU`);

const createFilmCountTemplate = () => {
  return (
    `<p>${filmsCountFormat} movies inside</p>`
  );
};

class UserRating extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  _getTemplate() {
    return createFilmCountTemplate();
  }
}



/***/ }),

/***/ "./src/view/film-details.js":
/*!**********************************!*\
  !*** ./src/view/film-details.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmDetails; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/project.js */ "./src/utils/project.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");




const createGenresTemplate = (genre) => {
  return `<span class="film-details__genre">${genre}</span>`;
};

const createFilmDetailsTemplate = (film) => {
  const {filmPoster, filmTitle, rating, filmDuration, genres, description, filmOriginTitle, director, writers, actors, country, ageLimit, isWatchlist, isWatched, isFavorite, date} = film;

  const filmGenresTemplate = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["generateTemplate"])(genres, createGenresTemplate);

  const releaseDate = date.toLocaleString(`en-GB`, {year: `numeric`, month: `long`, day: `numeric`});

  const checkedClass = `checked`;

  const isWatchlistChecked = Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_1__["checkActiveElement"])(isWatchlist, checkedClass);
  const isWatchedChecked = Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_1__["checkActiveElement"])(isWatched, checkedClass);
  const isFavoriteChecked = Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_1__["checkActiveElement"])(isFavorite, checkedClass);

  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./images/posters/${filmPoster}" alt="">

              <p class="film-details__age">${ageLimit}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${filmTitle}</h3>
                  <p class="film-details__title-original">Original: ${filmOriginTitle}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tbody><tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${writers}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${releaseDate}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${filmDuration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">${genres.length > 1 ? `Genres` : `Genre`}</td>
                  <td class="film-details__cell">${filmGenresTemplate}</td>
                </tr>
              </tbody></table>

              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isWatchlistChecked}>
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatchedChecked}>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavoriteChecked}>
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

      </form>
    </section>`
  );
};

class FilmDetails extends _abstract_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(film) {
    super();
    this._film = film;

    this._closeButtonClickHandler = this._closeButtonClickHandler.bind(this);
  }

  _getTemplate() {
    return createFilmDetailsTemplate(this._film);
  }

  _closeButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setCloseButtonClickHandler(callback) {
    const closeButton = this.getElement().querySelector(`.film-details__close-btn`);
    this._callback.click = callback;
    closeButton.addEventListener(`click`, this._closeButtonClickHandler);
  }
}


/***/ }),

/***/ "./src/view/film-list.js":
/*!*******************************!*\
  !*** ./src/view/film-list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsBlock; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsBlockTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

        <div class="films-list__container">

        </div>

      </section>
    </section>`
  );
};


class FilmsBlock extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createFilmsBlockTemplate();
  }
}


/***/ }),

/***/ "./src/view/films-sort.js":
/*!********************************!*\
  !*** ./src/view/films-sort.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const createFilmsSortTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DEFAULT}">Sort by default</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DATE}">Sort by date</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].RATING}">Sort by rating</a></li>
    </ul>`
  );
};

class Sort extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  _getTemplate() {
    return createFilmsSortTemplate();
  }

  _sortTypeChangeHandler(evt) {
    const sortButtons = this.getElement().querySelectorAll(`.sort__button`);

    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    sortButtons.forEach((button) => button.classList.remove(`sort__button--active`));
    evt.target.classList.add(`sort__button--active`);

    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}



/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilterItemTemplate = (filters) => {

  const {watchlist, history, favorites} = filters;

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorites}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

class Filter extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  _getTemplate() {
    return createFilterItemTemplate(this._filters);
  }
}


/***/ }),

/***/ "./src/view/most-commented-films.js":
/*!******************************************!*\
  !*** ./src/view/most-commented-films.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MostCommentedFilms; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createMostCommentedFilmsTemplate = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>

      <div class="films-list__container">
      </div>
    </section>`
  );
};

class MostCommentedFilms extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createMostCommentedFilmsTemplate();
  }
}


/***/ }),

/***/ "./src/view/no-films.js":
/*!******************************!*\
  !*** ./src/view/no-films.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsList; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoFilmsTemplate = () => {
  return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>
  </section>`;
};

class FilmsList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createNoFilmsTemplate();
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createShowMoreButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

class ShowMoreButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._showMoreClickHandler = this._showMoreClickHandler.bind(this);
  }

  _getTemplate() {
    return createShowMoreButtonTemplate();
  }

  _showMoreClickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setShowMoreClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._showMoreClickHandler);
  }
}


/***/ }),

/***/ "./src/view/top-rated-films.js":
/*!*************************************!*\
  !*** ./src/view/top-rated-films.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopRatedFilms; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createTopRatedFilmsTemplate = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container">
      </div>
    </section>`
  );
};


class TopRatedFilms extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createTopRatedFilmsTemplate();
  }
}


/***/ }),

/***/ "./src/view/user-rating.js":
/*!*********************************!*\
  !*** ./src/view/user-rating.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRating; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createUserRatingTemplate = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

class UserRating extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createUserRatingTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map