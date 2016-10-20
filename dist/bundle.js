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
		eleves = [new _eleves2.default("Nahon", "Félix")];

		var $eleve = $('#eleve'),
		    $one = $eleve.children('li').detach();

		var _loop = function _loop(j) {

			var li = $one.clone(),
			    eleve = eleves[j];
			li.find(".name").html(eleve.nom);
			li.find(".firstname").html(eleve.prenom);
			$eleve.append(li);
			li.attr('title', eleve.nom + " " + eleve.prenom);
			li.find('.score').html("Score:" + eleve.stats.getScore());
			li.find("#modif_eleve").on("click", function (event) {
				li.find(".name").html($("#nom").clone().css("color", "black"));
			});
			li.find("#modif_eleve").on("click", function (event) {
				li.find(".firstname").html($("#prenom").clone().css("color", "black"));
			});
		};

		for (var j = 0; j < eleves.length; j++) {
			_loop(j);
		}
		// Ajouter un élève / modifier un élève (maintenir cliquer pour modif...)

		$("#addeleve").on("click", function (event) {
			var elevechoice = new _eleves2.default(document.getElementById("nom").value, document.getElementById("prenom").value);
			var neweleve = $one.clone();
			neweleve.find(".name").html(elevechoice.nom);
			neweleve.find(".firstname").html(elevechoice.prenom);
			neweleve.attr('title', elevechoice.nom + " " + elevechoice.prenom);
			$eleve.append(neweleve);
			eleves.push(elevechoice);
			console.log(eleves);
			neweleve.find("#modif_eleve").on("click", function (event) {
				neweleve.find(".name").html($("#nom").clone().css("color", "black"));
			});
			neweleve.find("#modif_eleve").on("click", function (event) {
				neweleve.find(".firstname").html($("#prenom").clone().css("color", "black"));
			});
			/*neweleve.find("#nom").keypress(function(event){
	  	if(event.which == 13){
	  		alert('You pressed enter!');
	  		$("#nom").replaceWith("");
	  	}
	  });*/
		});
	}

	init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _stats = __webpack_require__(2);

	var _stats2 = _interopRequireDefault(_stats);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		this.stats = new _stats2.default();
	};

	exports.default = Eleve;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Stats = function () {
		function Stats() {
			_classCallCheck(this, Stats);

			this.presence = 0;
			this.participation = 0;
			this.passage = 0;
		}

		_createClass(Stats, [{
			key: "getScore",
			value: function getScore() {
				var score = 0;
				for (var stats in this) {
					score += this[stats];
				}
				return score;
			}
		}]);

		return Stats;
	}();

	exports.default = Stats;

/***/ }
/******/ ]);