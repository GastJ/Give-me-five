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
	}
	$("#addeleve").on("click", function(event){
		
	let elevechoice = new Eleve(document.getElementById("nom").value, document.getElementById("prenom").value);
	eleves.push(elevechoice);
	console.log(eleves);

	});
}

init();