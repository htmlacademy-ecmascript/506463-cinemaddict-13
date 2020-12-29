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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(r,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(r,t,e){r=r||{};var n=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};e.en.relativeTime=o;var d=function(t,n,d,i){for(var u,a,s,f=d.$locale().relativeTime||o,l=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=l.length,m=0;m<h;m+=1){var c=l[m];c.d&&(u=i?e(t).diff(d,c.d,!0):d.diff(t,c.d,!0));var y=(r.rounding||Math.round)(Math.abs(u));if(s=u>0,y<=c.r||!c.r){y<=1&&m>0&&(c=l[m-1]);var p=f[c.l];a="string"==typeof p?p.replace("%d",y):p(y,n,c.l,s);break}}return n?a:(s?f.future:f.past).replace("%s",a)};n.to=function(r,t){return d(r,t,this,!0)},n.from=function(r,t){return d(r,t,this)};var i=function(r){return r.$u?e.utc():e()};n.toNow=function(r){return this.to(i(this),r)},n.fromNow=function(r){return this.from(i(this),r)}}});


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID. If you use Expo, install `expo-random` ' +
        'and use `nanoid/async`.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ }),

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
/* harmony import */ var _view_film_count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/film-count.js */ "./src/view/film-count.js");
/* harmony import */ var _view_user_rating_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/user-rating.js */ "./src/view/user-rating.js");
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/filter.js */ "./src/view/filter.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _presenter_film_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presenter/film-list.js */ "./src/presenter/film-list.js");









const films = new Array(_view_film_count_js__WEBPACK_IMPORTED_MODULE_1__["FILM_COUNT"]).fill().map(_mock_film_js__WEBPACK_IMPORTED_MODULE_4__["generateFilm"]);
const filters = Object(_mock_filter_js__WEBPACK_IMPORTED_MODULE_5__["generateFilmsFilter"])(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const filmCountElement = document.querySelector(`.footer__statistics`);

const filmListPresenter = new _presenter_film_list_js__WEBPACK_IMPORTED_MODULE_6__["default"](siteMainElement);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteHeaderElement, new _view_user_rating_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, new _view_filter_js__WEBPACK_IMPORTED_MODULE_3__["default"](filters).getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

filmListPresenter.init(films);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmCountElement, new _view_film_count_js__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);


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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/project.js */ "./src/utils/project.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../const.js */ "./src/const.js");







const NAMES_MIN_COUNT = 2;
const NAMES_MAX_COUNT = 4;
const GENRES_MIN_COUNT = 1;
const GENRES_MAX_COUNT = 4;

const COMMENT_MIN_COUNT = 1;
const COMMENT_MAX_COUNT = 5;
const RATING_MIN_VALUE = 1;
const RATING_MAX_VALUE = 10;

const FILM_CREATE_MIN_DATE = `1900, 2, 1`;
const FILM_MIN_DURATION = 1200;
const FILM_MAX_DURATION = 14400;

const COMMENTS_MIN_COUNT = 1;
const COMMENTS_MAX_COUNT = 5;

const DATE_OF_FIRST_COMMENT = `2020, 2, 1`;

dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default.a);

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

const generateFilmComment = () => {
  const commentDate = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["generateRandomDate"])(new Date(DATE_OF_FIRST_COMMENT), new Date());

  return {
    emoji: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getElementFromArray"])(_const_js__WEBPACK_IMPORTED_MODULE_5__["EMOJIS"]),
    comment: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["generateSentenceFromString"])(descriptionString),
    commentDate: commentDate.fromNow(),
    author: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getElementFromArray"])(names),
  };
};

const generateFilm = () => {
  const id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
  const filmTitle = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getElementFromArray"])(filmTitles);
  const filmPoster = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getElementFromArray"])(filmPosters);
  const description = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["generateRandomArray"])(descriptionArray, 1, 5);
  const rating = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(RATING_MIN_VALUE, RATING_MAX_VALUE).toFixed(1);

  const filmReleaseDate = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["generateRandomDate"])(new Date(FILM_CREATE_MIN_DATE), new Date());
  const releaseDate = filmReleaseDate.format(`DD MMMM YYYY`);
  const releaseYear = filmReleaseDate.format(`YYYY`);

  const filmDurationInSecond = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getRandomInteger"])(FILM_MIN_DURATION, FILM_MAX_DURATION);
  const filmDuration = Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_4__["getFormatTime"])(filmDurationInSecond);
  const genres = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["generateRandomArray"])(filmGenres, GENRES_MIN_COUNT, GENRES_MAX_COUNT);
  const commentsCount = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getRandomInteger"])(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT);

  const filmOriginTitle = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getElementFromArray"])(filmOriginTitles);
  const director = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getElementFromArray"])(namesOfDirectors);
  const writers = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["generateRandomArray"])(namesOfWriters, NAMES_MIN_COUNT, NAMES_MAX_COUNT).join(`, `);
  const actors = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["generateRandomArray"])(namesOfActors, NAMES_MIN_COUNT, NAMES_MAX_COUNT).join(`, `);
  const country = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getElementFromArray"])(countries);
  const ageLimit = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getElementFromArray"])(ageLimits);

  const comments = new Array(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getRandomInteger"])(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)).fill().map(generateFilmComment);

  return {
    id,
    filmTitle,
    filmPoster,
    description,
    rating,
    releaseYear,
    filmDuration,
    genres,
    commentsCount,

    filmOriginTitle,
    director,
    writers,
    actors,
    releaseDate,
    country,
    ageLimit,
    isWatchlist: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getRandomInteger"])(0, 1)),
    isWatched: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getRandomInteger"])(0, 1)),
    isFavorite: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getRandomInteger"])(0, 1)),
    isEmoji: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["getRandomInteger"])(0, 1)),
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

/***/ "./src/presenter/film-list.js":
/*!************************************!*\
  !*** ./src/presenter/film-list.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmList; });
/* harmony import */ var _utils_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/project.js */ "./src/utils/project.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _view_films_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/films-sort.js */ "./src/view/films-sort.js");
/* harmony import */ var _view_no_films_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/no-films.js */ "./src/view/no-films.js");
/* harmony import */ var _view_film_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/film-list.js */ "./src/view/film-list.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_film_details_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/film-details.js */ "./src/view/film-details.js");
/* harmony import */ var _view_comments_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view/comments.js */ "./src/view/comments.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _view_top_rated_films_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../view/top-rated-films.js */ "./src/view/top-rated-films.js");
/* harmony import */ var _view_most_commented_films_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../view/most-commented-films.js */ "./src/view/most-commented-films.js");














const FILM_COUNT_PER_STEP = 5;
const FILM_EXTRA_COUNT = 2;

class FilmList {
  constructor(filmListContainer) {
    this._filmListContainer = filmListContainer;
    this._renderedFilmCount = FILM_COUNT_PER_STEP;

    this._filmListComponent = new _view_film_list_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this._sortComponent = new _view_films_sort_js__WEBPACK_IMPORTED_MODULE_4__["default"](this._currentSortType);
    this._noFilmsComponent = new _view_no_films_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._showMoreButtonComponent = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
    this._topRatedFilmsComponent = new _view_top_rated_films_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
    this._mostCommentedFilmsComponent = new _view_most_commented_films_js__WEBPACK_IMPORTED_MODULE_12__["default"]();

    this._cardComponent = new Map();
    this._cardTopRatedComponent = new Map();
    this._cardMostCommentedComponent = new Map();

    this._filmDetailsComponent = null;
    this._filmDetailsId = null;

    this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_3__["SortType"].DEFAULT;

    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._closeFilmDetails = this._closeFilmDetails.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);

    this._renderFilmCard = this._renderFilmCard.bind(this);
    this._renderExtraFilmCard = this._renderExtraFilmCard.bind(this);

    this._filmsList = this._filmListComponent.getElement().querySelector(`.films-list`); // список
    this._filmsContainer = this._filmListComponent.getElement().querySelector(`.films-list__container`); // карточки
  }

  init(films) {
    this._films = films.slice();
    this._sourcedFilms = films.slice();

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filmListContainer, this._filmListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    this._renderFilmList();
    this._renderExtraFilms();
  }

  _handleFilmChange(updatedFilm) {
    this._films = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(this._films, updatedFilm);
    this._reRenderFilmCard(updatedFilm, this._cardComponent);
    this._renderExtraFilmCard(updatedFilm, this._cardTopRatedComponent, this._topRatedContainer);
    this._renderExtraFilmCard(updatedFilm, this._cardMostCommentedComponent, this._mostCommentedContainer);

    if (updatedFilm.id === this._filmDetailsId && this._filmDetailsComponent) {
      this._renderFilmDetails(updatedFilm);
    }
  }

  _sortFilmCards(sortType) {
    switch (sortType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_3__["SortType"].DATE:
        this._films.sort(_utils_project_js__WEBPACK_IMPORTED_MODULE_0__["sortByDate"]);
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_3__["SortType"].RATING:
        this._films.sort(_utils_project_js__WEBPACK_IMPORTED_MODULE_0__["sortByRating"]);
        break;
      default:
        this._films = this._sourcedFilms.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortFilmCards(sortType);
    this._clearFilmList();
    this._renderFilmList();
  }

  _renderSort() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filmListContainer, this._sortComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderNoFilms() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filmListContainer, this._noFilmsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
  }

  _createFilmCard(film) {
    const filmCardComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_7__["default"](film);

    filmCardComponent.setFilmCardClickHandler(() => this._renderFilmDetails(film));
    filmCardComponent.setWatchlistClickHandler(() => this._handleWatchlistClick(film));
    filmCardComponent.setWatchedClickHandler(() => this._handleWatchedClick(film));
    filmCardComponent.setFavoriteClickHandler(() => this._handleFavoriteClick(film));

    return filmCardComponent;
  }

  _renderFilmCard(film, collection, container) {
    this._filmCardComponent = this._createFilmCard(film);

    collection.set(film.id, this._filmCardComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(container, this._filmCardComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
  }

  _reRenderFilmCard(film, collection) {
    this._filmCardComponent = this._createFilmCard(film);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["replace"])(this._filmCardComponent, collection.get(film.id));
    collection.set(film.id, this._filmCardComponent);
  }

  _renderExtraFilmCard(film, collection, container) {
    const filmCardComponent = this._createFilmCard(film);

    if (collection.has(film.id)) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["replace"])(filmCardComponent, collection.get(film.id));
      collection.set(film.id, filmCardComponent);
    }
    if (collection.size < FILM_EXTRA_COUNT) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(container, filmCardComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
      collection.set(film.id, filmCardComponent);
    }
  }

  _closeFilmDetails() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._filmDetailsComponent);
    this._filmDetailsComponent = null;
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    Object(_utils_project_js__WEBPACK_IMPORTED_MODULE_0__["escPressHandler"])(evt, this._closeFilmDetails);
  }

  _renderFilmDetails(film) {
    if (this._filmDetailsComponent) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._filmDetailsComponent);
    }

    this._filmDetailsId = film.id;

    this._filmDetailsComponent = new _view_film_details_js__WEBPACK_IMPORTED_MODULE_8__["default"](film);
    this._commentsComponent = new _view_comments_js__WEBPACK_IMPORTED_MODULE_9__["default"](film);

    document.addEventListener(`keydown`, this._escKeyDownHandler);

    this._filmDetailsComponent.setCloseButtonClickHandler(() => this._closeFilmDetails());
    this._filmDetailsComponent.setWatchlistChangeHandler(() => this._handleWatchlistClick(film));
    this._filmDetailsComponent.setWatchedChangeHandler(() => this._handleWatchedClick(film));
    this._filmDetailsComponent.setFavoriteChangeHandler(() => this._handleFavoriteClick(film));

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filmListContainer, this._filmDetailsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filmDetailsComponent, this._commentsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
  }

  _handleWatchlistClick(film) {
    this._handleFilmChange(
        Object.assign(
            {},
            film,
            {
              isWatchlist: !film.isWatchlist
            }
        )
    );
  }

  _handleWatchedClick(film) {
    this._handleFilmChange(
        Object.assign(
            {},
            film,
            {
              isWatched: !film.isWatched
            }
        )
    );
  }

  _handleFavoriteClick(film) {
    this._handleFilmChange(
        Object.assign(
            {},
            film,
            {
              isFavorite: !film.isFavorite
            }
        )
    );
  }

  _handleShowMoreButtonClick() {
    this._renderFilms(this._renderedFilmCount, this._renderedFilmCount + FILM_COUNT_PER_STEP, this._cardComponent, this._filmsContainer);
    this._renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this._renderedFilmCount >= this._films.length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._showMoreButtonComponent);
    }
  }

  _renderShowMoreButton() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filmsList, this._showMoreButtonComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    this._showMoreButtonComponent.setShowMoreClickHandler(this._handleShowMoreButtonClick);
  }

  _renderFilms(from, to, collection, container, renderCard = this._renderFilmCard) {
    this._films
      .slice(from, to)
      .forEach((film) => renderCard(film, collection, container));
  }

  _renderExtraFilms() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filmListComponent, this._topRatedFilmsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filmListComponent, this._mostCommentedFilmsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

    this._extraContainers = this._filmListComponent.getElement().querySelectorAll(`.films-list--extra .films-list__container`);
    this._topRatedContainer = this._extraContainers[0];
    this._mostCommentedContainer = this._extraContainers[1];

    this._renderFilms(0, FILM_EXTRA_COUNT, this._cardTopRatedComponent, this._topRatedContainer, this._renderExtraFilmCard);
    this._renderFilms(0, FILM_EXTRA_COUNT, this._cardMostCommentedComponent, this._mostCommentedContainer, this._renderExtraFilmCard);
  }

  _renderFilmList() {
    this._renderSort();

    if (this._films.length === 0) {
      this._renderNoFilms();
      return;
    }

    this._renderFilms(0, Math.min(this._films.length, FILM_COUNT_PER_STEP), this._cardComponent, this._filmsContainer);

    if (this._films.length > FILM_COUNT_PER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _clearFilmList() {
    this._cardComponent.forEach((component) => Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(component));
    this._cardComponent = new Map();
    this._renderedFilmCount = FILM_COUNT_PER_STEP;
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._showMoreButtonComponent);
  }

}


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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


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
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(randomDate);
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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


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

const getWeightForNoDataFilm = (dataA, dataB) => {
  if (dataA === null && dataB === null) {
    return 0;
  }

  if (dataA === null) {
    return 1;
  }

  if (dataB === null) {
    return -1;
  }

  return null;
};

const sortByDate = (filmA, filmB) => {
  const weight = getWeightForNoDataFilm(filmA.releaseDate, filmB.releaseDate);

  if (weight !== null) {
    return weight;
  }

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(filmB.releaseDate).diff(filmA.releaseDate);
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
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart.js */ "./src/view/smart.js");
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
          <div for="add-emoji" class="film-details__add-emoji-label">

          </div>

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

class Comments extends _smart_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(film) {
    super();
    this._film = film;

    this._emojiClickHandler = this._emojiClickHandler.bind(this);
    this.setEmojiClickHandler(this._emojiClickHandler);
  }

  _getTemplate() {
    return createCommentsListTemplate(this._film);
  }

  createCommentsEmoji(evt) {
    const emojiName = evt.target.value.split(` `, 1);
    const commentsEmoji = `<img src="images/emoji/${emojiName}.png" width="55" height="55" alt="${emojiName}" value="${emojiName}"></img>`;

    return commentsEmoji;
  }

  _chooseEmoji(evt) {
    const emojiContainer = document.querySelector(`.film-details__add-emoji-label`);
    emojiContainer.removeChild(emojiContainer.firstChild);

    const emoji = this.createCommentsEmoji(evt);
    emojiContainer.innerHTML = emoji;
  }

  _emojiClickHandler(evt) {
    if (evt.target.classList.contains(`film-details__emoji-item`)) {
      evt.preventDefault();
      this._chooseEmoji(evt);
    }
  }

  setEmojiClickHandler() {
    const emojiList = this.getElement().querySelector(`.film-details__emoji-list`);
    emojiList.addEventListener(`click`, this._emojiClickHandler);
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

  const {filmPoster, filmTitle, rating, releaseYear, filmDuration, genres, description, commentsCount, isWatchlist, isWatched, isFavorite} = film;

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
        <span class="film-card__year">${releaseYear}</span>
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
    this.getElement()
        .querySelector(`.film-card__controls-item--favorite`)
        .addEventListener(`click`, this._favoriteClickHandler);
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
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart.js */ "./src/view/smart.js");




const createGenresTemplate = (genre) => {
  return `<span class="film-details__genre">${genre}</span>`;
};

const createFilmDetailsTemplate = (state) => {
  const {filmPoster, filmTitle, rating, filmDuration, genres, description, filmOriginTitle, director, writers, actors, releaseDate, country, ageLimit, isWatchlist, isWatched, isFavorite} = state;

  const filmGenresTemplate = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["generateTemplate"])(genres, createGenresTemplate);

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

class FilmDetails extends _smart_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(film) {
    super();
    this._state = film;

    this._closeButtonClickHandler = this._closeButtonClickHandler.bind(this);
    this._watchlistToggleHandler = this._watchlistToggleHandler.bind(this);
    this._watchedToggleHandler = this._watchedToggleHandler.bind(this);
    this._favoriteToggleHandler = this._favoriteToggleHandler.bind(this);
  }

  _getTemplate() {
    return createFilmDetailsTemplate(this._state);
  }

  _closeButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  _watchlistToggleHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  _watchedToggleHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  _favoriteToggleHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setCloseButtonClickHandler(callback) {
    const closeButton = this.getElement().querySelector(`.film-details__close-btn`);
    this._callback.click = callback;
    closeButton.addEventListener(`click`, this._closeButtonClickHandler);
  }

  setWatchlistChangeHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement()
        .querySelector(`#watchlist`)
        .addEventListener(`change`, this._watchlistToggleHandler);
  }

  setWatchedChangeHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement()
        .querySelector(`#watched`)
        .addEventListener(`change`, this._watchedToggleHandler);
  }

  setFavoriteChangeHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement()
        .querySelector(`#favorite`)
        .addEventListener(`change`, this._favoriteToggleHandler);
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

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smart; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class Smart extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._state = {};
  }

  updateData(update) {
    if (!update) {
      return;
    }

    this._state = Object.assign(
        {},
        this._state,
        update
    );

    this.updateElement();
  }

  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);
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