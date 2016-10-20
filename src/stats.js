export default class Stats {
	
	constructor () {
		this.presence = 0;
		this.participation = 0;
		this.passage = 0;
	}

	getScore(){
		let score = 0;
		
		// Gestion du score
		
		$("#absent").on("click",function(event){
			score -= 10;
			console.log(score);
		});
		$("#present").on("click",function(event){
			score += 10;
			console.log(score);
		});
		$("#retard").on("click",function(event){
			score -= 2;
			console.log(score);
		});
		
		return score;

	}
}