import Stats from './stats'

export default class Eleve{

	/**
	 * Représente les élèves de la classe
	 * @param  {string} nom    nom de l'élève
	 * @param  {string} prenom prénom de l'élève
	 */
	constructor(nom, prenom, score){
		this.nom = nom;
		this.prenom = prenom;
		this.score = 0 || score;
		this.stats = new Stats();
	}
}