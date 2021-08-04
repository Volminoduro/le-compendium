$(document).ready(function() {
  var data = $(".card");
  var cartes = [];
  console.log(cartes);
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    var carte = new Object();
    carte.edition="conte";
    carte.nom=$(".name", data[i]).text();
    carte.type="lieu";
    carte.illustration=$(".image", data[i]).css('background-image');

    carte.caracteristiques=[];
    var caracteristique = new Object();
    caracteristique.nature = "<lieu-icon></lieu-icon>";
    caracteristique.montant = "";
    carte.caracteristiques.push(caracteristique);
    /* var caracteristiqueOr = new Object();
    caracteristiqueOr.nature = "<or-icon></or-icon>";
    caracteristiqueOr.montant = "5";
    carte.caracteristiques.push(caracteristiqueOr); */

    carte.effets=[];

    var effets = $(".liste", data[i]);
    for (var j = 0; j < effets.length; j++) {
      var effetObj = new Object();
      effetObj.nature = "";
      effetObj.nom = "";
      
      var effet = new Object();
      effet.contenu = effets[j].innerHTML;

      effetObj.effet = effet;

      carte.effets.push(effetObj);
    }

    carte.citation=$(".quote", data[i]).text();

    cartes.push(carte);
  }

  console.log(JSON.stringify(cartes));
});

function creerEntete(carte){
  var entete = $("<entete></entete>");
    
  var nomDiv = $("<div></div>").addClass("nom").html(carte.nom);
  $(entete).append(nomDiv);
  
  var imgDiv = $("<div></div>").addClass("img").html("<img src='"+carte.illustration+"' />");
  $(entete).append(imgDiv);
  
  //On traite la boucle de fanion
  var fanionDiv = $("<div></div>").addClass("fanion");
  $(entete).append(fanionDiv.html(getAllCaracteristiques(carte.caracteristiques)));

  return entete;
}

function creerDescription(carte){
  var description  = $("<description></description>");
      
  $(description).append(getAllEffects(carte.effets));

  $(description).append(creerCitation(carte));

  return description;
}

function creerCitation(carte){
  return $("<div></div>").addClass("citation").html(carte.citation);
}

/* RECUPERER TOUS LES FANIONS*/
function getAllCaracteristiques(caracteristiques){
  var fanions = "";
  
  $(caracteristiques).each(function(i,e){
    fanions += "<sp>"+e.montant+"</sp>";
    fanions += "<"+e.nature+" >"+""+"</"+e.nature+">";
    if(i!= caracteristiques.length-1)
      fanions += "<br />";
  });
  
  return fanions;
}

/*RECUPERER TOUT LES EFFETS*/
function getAllEffects(effets){
  var effetsHtml = $("<div></div>");
  
  $(effets).each(function(i,e){
    var nomEffet = $('<div></div>').addClass("titre-effet "+e.nature).html(e.nom);
    
    var descEffet = $('<div></div>').addClass("descEffet").html("<ul>"+getSubEffects(e.effet)+"</ul>");
    
    $(effetsHtml).append(nomEffet[0]);
    $(effetsHtml).append(descEffet[0]);
  });
  
  return $(effetsHtml).find('>div');
}
  
/*RECUPERER TOUS LES SOUS EFFETS EN RECURSIF*/
function getSubEffects(sousEffets){
  var content = ""; 
  
  $(sousEffets).each(function(i,e){
    var li = "<li>"+e.contenu+"</li>";
    content += li;
    
    if(!!e.enfants){
      content += "<ul>"+getSubEffects(e.enfants[0])+"</ul>";
    }
  });
  
  return content;
}