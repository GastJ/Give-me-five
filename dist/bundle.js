/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _eleves = __webpack_require__(1);

	var _eleves2 = _interopRequireDefault(_eleves);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var eleves = [];
	function init(eleves) {
		eleves = [new _eleves2.default("Nahon", "Félix"), new _eleves2.default("Coquin", "Axel"), new _eleves2.default("Saigot", "Pierre"), new _eleves2.default("Dussol", "Clément")];

		var $eleve = $('#eleve'),
		    $one = $eleve.children('li').detach();

		for (var j = 0; j < eleves.length; j++) {

			var li = $one.clone(),
			    eleve = eleves[j];
			li.find(".name").html(eleve.nom + " " + eleve.prenom);

			eleve.id = j;

			$eleve.append(li);
			li.attr('title', eleve.nom + " " + eleve.prenom);
		}
	}
	$("#addeleve").on("click", function (event) {

		console.log("test");
		/*let elevechoice = new Eleve(eleve.nom, eleve.prenom);
	 eleves.push(elevechoice);*/
		var $eleve = $("#eleve"),
		    $three = $eleve.children('li');
		var neweleve = $three.clone().eq(1);
		$eleve.append(neweleve);
	});
	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Eleve =

	/**
	 * Représente les élèves de la classe
	 * @param  {string} nom    nom de l'élève
	 * @param  {string} prenom prénom de l'élève
	 */
	function Eleve(nom, prenom) {
		_classCallCheck(this, Eleve);

		this.nom = nom;
		this.prenom = prenom;
	};

	exports.default = Eleve;

/***/ }
/******/ ]);