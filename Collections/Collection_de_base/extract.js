$(document).ready(function() {
  var data = JSON.parse(localStorage.getItem('data'));
  var mainContainer = $("#myData")[0];
  for (var i = 0; i < data.cartes.length; i++) {
    //On créé la div carte
    var carte = $("<div></div>"); 
    $(carte).addClass('carte ' + data.cartes[i].type + ' ' + data.cartes[i].edition);
        
    $(carte).append(creerEntete(data.cartes[i]));
    
    $(carte).append(creerDescription(data.cartes[i]));
    
    $(mainContainer).append(carte);
  }
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