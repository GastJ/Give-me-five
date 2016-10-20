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
			li.find(".name").html(eleve.nom);
			li.find(".firstname").html(eleve.prenom);
		$eleve.append(li);
		li.attr('title', eleve.nom + " " +eleve.prenom);
		li.find('.score').html("Score:" + eleve.stats.getScore());
		li.find("#modif_eleve").on("click",function(event){
			li.find(".name").html($("#nom").clone().css("color", "black"));
		})
		li.find("#modif_eleve").on("click",function(event){
			li.find(".firstname").html($("#prenom").clone().css("color", "black"));
		})
	}
	// Ajouter un élève / modifier un élève (maintenir cliquer pour modif...)
	
	$("#addeleve").on("click", function(event){
		let elevechoice = new Eleve(document.getElementById("nom").value, document.getElementById("prenom").value);
		let neweleve = $one.clone();
			neweleve.find(".name").html(elevechoice.nom);
			neweleve.find(".firstname").html(elevechoice.prenom);
			neweleve.attr('title', elevechoice.nom + " " +elevechoice.prenom);
		$eleve.append(neweleve);
		eleves.push(elevechoice);
		console.log(eleves);
		neweleve.find("#modif_eleve").on("click",function(event){
			neweleve.find(".name").html($("#nom").clone().css("color", "black"));
		});
		neweleve.find("#modif_eleve").on("click",function(event){
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