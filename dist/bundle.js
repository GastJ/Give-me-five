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
		eleves = [new _eleves2.default("Nahon", "Félix", 0)];

		var $eleve = $('#eleve'),
		    $one = $eleve.children('li').detach();

		// Création d'une boucle qui parcourt le tableau eleves pour les ajouter

		var _loop = function _loop(j) {
			var li = $one.clone(),
			    eleve = eleves[j];
			li.find(".name").html(eleve.nom);
			li.find(".firstname").html(eleve.prenom);
			$eleve.append(li);
			li.attr('title', eleve.nom + " " + eleve.prenom);
			li.find('.score').html("Score:" + eleve.score);

			// Gestion du score

			li.find($(".absent")).on("click", function (event) {
				eleve.score -= 10;
				li.find('.score').html("Score:" + eleve.score);
			});
			li.find($(".present")).on("click", function (event) {
				eleve.score += 10;
				li.find('.score').html("Score:" + eleve.score);
			});
			li.find($(".retard")).on("click", function (event) {
				eleve.score -= 2;
				li.find('.score').html("Score:" + eleve.score);
			});

			// Remplace le nom et le prénom par des inputs

			li.find("#modif_eleve").on("click", function (event) {
				li.find(".name").html("<input type='text' placeholder='Nom' id='nomeleve' name='nomeleve' required/>");
				li.find(".firstname").html("<input type='text' placeholder='Prénom' id='prenomeleve' name='prenomeleve' required/>");

				// Modifie le nom par la valeur de l'input Nom (quand on retire le curseur de l'input) 

				li.find(".name").find("#nomeleve").on("mouseout", function (event) {
					if ($("#nomeleve").val() !== "") {
						li.find(".name").html("<h1 class='name1'>" + $("#nomeleve").val() + "</h1>");
					}
				});

				// Modifie le prénom par la valeur de l'input Prénom (quand on retire le curseur de l'input)

				li.find(".firstname").find("#prenomeleve").on("mouseout", function (event) {
					if ($("#prenomeleve").val() !== "") {
						li.find(".firstname").html("<h1 class='firstname1'>" + $("#prenomeleve").val() + "</h1>");
					}
				});
			});
		};

		for (var j = 0; j < eleves.length; j++) {
			_loop(j);
		}

		// Ajouter un élève / modifier un élève

		$("#addeleve").on("click", function (event) {

			var elevechoice = new _eleves2.default(document.getElementById("nom").value, document.getElementById("prenom").value, 0);
			var neweleve = $one.clone();
			neweleve.find(".name").html(elevechoice.nom);
			neweleve.find(".firstname").html(elevechoice.prenom);
			neweleve.find('.score').html("Score:" + elevechoice.score);
			neweleve.attr('title', elevechoice.nom + " " + elevechoice.prenom);
			$eleve.append(neweleve);
			eleves.push(elevechoice);

			// Gestion du score sur les nouveaux élèves

			neweleve.find($(".absent")).on("click", function (event) {
				elevechoice.score -= 10;
				neweleve.find('.score').html("Score:" + elevechoice.score);
			});
			neweleve.find($(".present")).on("click", function (event) {
				elevechoice.score += 10;
				neweleve.find('.score').html("Score:" + elevechoice.score);
			});
			neweleve.find($(".retard")).on("click", function (event) {
				elevechoice.score -= 2;
				neweleve.find('.score').html("Score:" + elevechoice.score);
			});
			// Remplace le nom et le prénom par des inputs

			neweleve.find("#modif_eleve").on("click", function (event) {
				neweleve.find(".name").html("<input type='text' placeholder='Nom' id='nomeleve' name='nomeleve' required/>").css("color", "black");
				neweleve.find(".firstname").html("<input type='text' placeholder='Prénom' id='prenomeleve' name='prenomeleve' required/>").css("color", "black");

				// Modifie le nom par la valeur de l'input Nom (quand on retire le curseur de l'input)

				neweleve.find(".name").find("#nomeleve").on("mouseout", function (event) {
					if ($("#nomeleve").val() !== "") {
						neweleve.find(".name").html("<h1 class='name1'>" + $("#nomeleve").val() + "</h1>");
					}
				});

				// Modifie le prénom par la valeur de l'input Prénom (quand on retire le curseur de l'input)

				neweleve.find(".firstname").find("#prenomeleve").on("mouseout", function (event) {
					if ($("#prenomeleve").val() !== "") {
						neweleve.find(".firstname").html("<h1 class='firstname1'>" + $("#prenomeleve").val() + "</h1>");
					}
				});
			});
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
	function Eleve(nom, prenom, score) {
		_classCallCheck(this, Eleve);

		this.nom = nom;
		this.prenom = prenom;
		this.score = 0 || score;
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

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Stats = function Stats() {
		_classCallCheck(this, Stats);

		this.presence = 0;
		this.participation = 0;
		this.passage = 0;
	};

	exports.default = Stats;

/***/ }
/******/ ]);