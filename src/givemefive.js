import Eleve from './eleves';

let eleves = [];

function init(eleves){
	eleves = [
		new Eleve("Nahon","Félix")
	]

	let $eleve = $('#eleve'),
		$one 	= $eleve.children('li').detach();

	for(let j=0; j<eleves.length; j++){

		let li 		= $one.clone(),
			eleve 	= eleves[j];
			li.find(".name").html(eleve.nom + " " +eleve.prenom);
		$eleve.append(li);
		li.attr('title', eleve.nom + " " +eleve.prenom);
		li.find('.score').html("Score:" + eleve.stats.getScore());
	}
	$("#addeleve").on("click", function(event){
	let elevechoice = new Eleve(document.getElementById("nom").value, document.getElementById("prenom").value);
	let $eleve = $("#eleve"),
		$three = $eleve.children('li');
	let neweleve = $three.clone().eq(0);
		neweleve.find(".name").html(elevechoice.nom + " " + elevechoice.prenom);
		neweleve.attr('title', elevechoice.nom + " " +elevechoice.prenom);
	$eleve.append(neweleve);
	eleves.push(elevechoice);
	console.log(eleves);
	});
}

init();