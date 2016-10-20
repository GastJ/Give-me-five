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
			li.find(".name").html("<input type='text' placeholder='Nom' id='nomeleve' name='nomeleve' required/>").css("color","black");
			li.find(".firstname").html("<input type='text' placeholder='Prénom' id='prenomeleve' name='prenomeleve' required/>").css("color", "black");

			// Modifie le nom par la valeur de l'input Nom
		
			li.find(".name").find("#nomeleve").on("mouseout",function(event){

				li.find(".name").html("<h1 class='name'>" + $("#nomeleve").val() + "</h1>");
			});

			// Modifie le prénom par la valeur de l'input Prénom
		
			li.find(".firstname").find("#prenomeleve").on("mouseout",function(event){
				
				li.find(".firstname").html("<h1 class='firstname'>" + $("#prenomeleve").val() + "</h1>");
			});
		})
	}

	// Ajouter un élève / modifier un élève
	
	$("#addeleve").on("click", function(event){

		let elevechoice = new Eleve(document.getElementById("nom").value, document.getElementById("prenom").value);
		let neweleve = $one.clone();
			neweleve.find(".name").html(elevechoice.nom);
			neweleve.find(".firstname").html(elevechoice.prenom);
			neweleve.find('.score').html("Score:" + elevechoice.stats.getScore());
			neweleve.attr('title', elevechoice.nom + " " +elevechoice.prenom);
		$eleve.append(neweleve);
		eleves.push(elevechoice);
		console.log(eleves);
		neweleve.find("#modif_eleve").on("click",function(event){
			neweleve.find(".name").html("<input type='text' placeholder='Nom' id='nomeleve' name='nomeleve' required/>").css("color","black");
			neweleve.find(".firstname").html("<input type='text' placeholder='Prénom' id='prenomeleve' name='prenomeleve' required/>").css("color", "black");
		
		// Modifie le nom par la valeur de l'input Nom
		
			neweleve.find(".name").find("#nomeleve").on("mouseout",function(event){

				neweleve.find(".name").html("<h1 class='name'>" + $("#nomeleve").val() + "</h1>");
			});

		// Modifie le prénom par la valeur de l'input Prénom
		
			neweleve.find(".firstname").find("#prenomeleve").on("mouseout",function(event){

				neweleve.find(".firstname").html("<h1 class='firstname'>" + $("#prenomeleve").val() + "</h1>");
			});
		});
	});
}

init();