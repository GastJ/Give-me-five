import Eleve from './eleves'
import moment from 'moment'
import 'moment/locale/fr';
let eleves = [],
// Date du jour
	now = moment();
moment.locale('fr');
$(".date").html(moment().format('LLLL'));

// Function init

function init(eleves){
	eleves = [
		new Eleve("Nahon","Félix",0)
	]

	let $eleve = $('#eleve'),
		$one 	= $eleve.children('li').detach();

	// Création d'une boucle qui parcourt le tableau eleves pour les ajouter
	
	for(let j=0; j<eleves.length; j++){
		let li 		= $one.clone(),
			eleve 	= eleves[j];
			li.find(".name").html(eleve.nom);
			li.find(".firstname").html(eleve.prenom);
		$eleve.append(li);
		li.attr('title', eleve.nom + " " +eleve.prenom);
		li.find('.score').html("Score:" + eleve.score);

		// Gestion du score
		
		li.find($(".absent")).on("click",function(event){
			eleve.score -= 10;
			li.find('.score').html("Score:" + eleve.score);
		});
		li.find($(".present")).on("click",function(event){
			eleve.score += 10;
			li.find('.score').html("Score:" + eleve.score);
		});
		li.find($(".retard")).on("click",function(event){
			eleve.score -= 2;
			li.find('.score').html("Score:" + eleve.score);
		});

		// Remplace le nom et le prénom par des inputs
		
		li.find("#modif_eleve").on("click",function(event){
			li.find(".name").html("<input type='text' placeholder='Nom' id='nomeleve' name='nomeleve' required/>");
			li.find(".firstname").html("<input type='text' placeholder='Prénom' id='prenomeleve' name='prenomeleve' required/>");

			// Modifie le nom par la valeur de l'input Nom (quand on retire le curseur de l'input) 
		
			li.find(".name").find("#nomeleve").on("mouseout",function(event){
				if($("#nomeleve").val() !== ""){
					li.find(".name").html("<h1 class='name1'>" + $("#nomeleve").val() + "</h1>");
				}
			});

			// Modifie le prénom par la valeur de l'input Prénom (quand on retire le curseur de l'input)
		
			li.find(".firstname").find("#prenomeleve").on("mouseout",function(event){
				if($("#prenomeleve").val() !== ""){
					li.find(".firstname").html("<h1 class='firstname1'>" + $("#prenomeleve").val() + "</h1>");
				}
			});
		})
	}

	// Ajouter un élève / modifier un élève
	
	$("#addeleve").on("click", function(event){

		let elevechoice = new Eleve(document.getElementById("nom").value, document.getElementById("prenom").value, 0);
		let neweleve = $one.clone();
			neweleve.find(".name").html(elevechoice.nom);
			neweleve.find(".firstname").html(elevechoice.prenom);
			neweleve.find('.score').html("Score:" + elevechoice.score);
			neweleve.attr('title', elevechoice.nom + " " +elevechoice.prenom);
		$eleve.append(neweleve);
		eleves.push(elevechoice);

		// Gestion du score sur les nouveaux élèves

		neweleve.find($(".absent")).on("click",function(event){
			elevechoice.score -= 10;
			neweleve.find('.score').html("Score:" + elevechoice.score);
		});
		neweleve.find($(".present")).on("click",function(event){
			elevechoice.score += 10;
			neweleve.find('.score').html("Score:" + elevechoice.score);
		});
		neweleve.find($(".retard")).on("click",function(event){
			elevechoice.score -= 2;
			neweleve.find('.score').html("Score:" + elevechoice.score);
		});
		// Remplace le nom et le prénom par des inputs
		
		neweleve.find("#modif_eleve").on("click",function(event){
			neweleve.find(".name").html("<input type='text' placeholder='Nom' id='nomeleve' name='nomeleve' required/>").css("color","black");
			neweleve.find(".firstname").html("<input type='text' placeholder='Prénom' id='prenomeleve' name='prenomeleve' required/>").css("color", "black");
		
		// Modifie le nom par la valeur de l'input Nom (quand on retire le curseur de l'input)
		
			neweleve.find(".name").find("#nomeleve").on("mouseout",function(event){
				if($("#nomeleve").val() !== ""){
					neweleve.find(".name").html("<h1 class='name1'>" + $("#nomeleve").val() + "</h1>");
				}
			});

		// Modifie le prénom par la valeur de l'input Prénom (quand on retire le curseur de l'input)
		
			neweleve.find(".firstname").find("#prenomeleve").on("mouseout",function(event){
				if($("#prenomeleve").val() !== ""){
					neweleve.find(".firstname").html("<h1 class='firstname1'>" + $("#prenomeleve").val() + "</h1>");
				}
			});
		});
	});
}

init();