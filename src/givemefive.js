import Eleve from './eleves';

let eleves = [];
function init(eleves){
	eleves = [
		new Eleve("Nahon","Félix"),
		new Eleve("Coquin", "Axel"),
		new Eleve("Saigot", "Pierre"),
		new Eleve("Dussol", "Clément")
	]

	let $eleve = $('#eleve'),
		$one 	= $eleve.children('li').detach();

	for(let j=0; j<eleves.length; j++){

		let li 		= $one.clone(),
			eleve 	= eleves[j];
			li.find(".name").html(eleve.nom + " " +eleve.prenom);

		eleve.id 	= j;

		$eleve.append(li);
		li.attr('title', eleve.nom + " " +eleve.prenom);
	}
}
$("#addeleve").on("click", function(event){

	console.log("test");
	/*let elevechoice = new Eleve(eleve.nom, eleve.prenom);
	eleves.push(elevechoice);*/
	let $eleve = $("#eleve"),
		$three 	= $eleve.children('li');
	let neweleve 	= $three.clone().eq(1);
	$eleve.append(neweleve);
	});
init();