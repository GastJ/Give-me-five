export default class Stats {
	
	constructor () {
		this.presence = 0;
		this.participation = 0;
		this.passage = 0;
	}

	getScore(){
		let score = 0;
		for (let stats in this) {
			score += this[stats];
		}
		return score;
	}
}